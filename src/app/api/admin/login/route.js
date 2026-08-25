import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { createSession, verifyPassword } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    // Timing-safe password comparison
    if (!(await verifyPassword(password, adminPassword))) {
      // Small delay to further deter brute-force attacks
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json(
        { success: false, message: "Incorrect password. Please try again." },
        { status: 401 }
      );
    }

    // Generate a random session token (not the raw secret)
    const sessionToken = await createSession();

    // Set an httpOnly session cookie with the random token
    const cookieStore = await cookies();
    cookieStore.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
