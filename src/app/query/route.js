import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const data = await sql`SELECT * FROM contact_messages ORDER BY created_at DESC`;

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Query error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to query database" },
      { status: 500 }
    );
  }
}
