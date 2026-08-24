import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

// ── In-memory rate limiter ────────────────────────────────────────
// Max 3 submissions per IP per 10 minutes
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const ipMap = new Map(); // { ip: { count, resetAt } }

function getRateLimitResult(ip) {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    // First request or window expired — reset
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfterSec };
  }

  entry.count += 1;
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

// ── Optional email notification via Resend ────────────────────────
async function sendEmailNotification({ firstName, lastName, email, phone, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !toEmail) return; // gracefully skip if not configured

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Canvix Contact <onboarding@resend.dev>",
        to: [toEmail],
        subject: `📬 New Contact from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 540px; margin: 0 auto; background: #f9fafb; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb;">
            <h2 style="color: #111827; margin: 0 0 8px;">New Contact Form Submission</h2>
            <p style="color: #6b7280; margin: 0 0 24px; font-size: 14px;">Someone submitted the Canvix contact form.</p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; width: 100px; font-weight: 600; vertical-align: top;">NAME</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-weight: 600; vertical-align: top;">EMAIL</td>
                <td style="padding: 10px 0; color: #7c3aed; font-size: 14px;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-weight: 600; vertical-align: top;">PHONE</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${phone}</td>
              </tr>` : ""}
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-weight: 600; vertical-align: top;">MESSAGE</td>
                <td style="padding: 10px 0; color: #374151; font-size: 14px; line-height: 1.6;">${message}</td>
              </tr>
            </table>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/admin"
                 style="display: inline-block; background: linear-gradient(135deg,#7c3aed,#06b6d4); color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px;">
                View in Admin Dashboard →
              </a>
            </div>
          </div>
        `,
      }),
    });
  } catch (err) {
    // Non-fatal — just log and continue
    console.warn("Email notification failed:", err.message);
  }
}

// ── Main POST handler ─────────────────────────────────────────────
export async function POST(request) {
  // Get client IP for rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  // Check rate limit
  const rateLimit = getRateLimitResult(ip);
  if (!rateLimit.allowed) {
    const minutes = Math.ceil(rateLimit.retryAfterSec / 60);
    return NextResponse.json(
      {
        success: false,
        message: `Too many submissions. Please wait ${minutes} minute${minutes !== 1 ? "s" : ""} before trying again.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSec),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body || {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO contact_messages (first_name, last_name, email, phone, message, created_at)
      VALUES (
        ${firstName},
        ${lastName},
        ${email},
        ${phone || ""},
        ${message},
        ${new Date().toISOString()}
      )
      RETURNING *
    `;

    // Send email notification (non-blocking, non-fatal)
    sendEmailNotification({ firstName, lastName, email, phone, message }).catch(() => {});

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
        data: result[0],
      },
      {
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("Contact POST error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error processing request" },
      { status: 500 }
    );
  }
}
