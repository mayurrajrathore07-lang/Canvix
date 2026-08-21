import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const messages = await sql`
      SELECT * FROM contact_messages ORDER BY created_at DESC
    `;

    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("Messages GET error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error fetching messages" },
      { status: 500 }
    );
  }
}
