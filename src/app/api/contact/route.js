import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request) {
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

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully.",
      data: result[0],
    });
  } catch (error) {
    console.error("Contact POST error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error processing request" },
      { status: 500 }
    );
  }
}
