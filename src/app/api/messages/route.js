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

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Message ID is required" },
        { status: 400 }
      );
    }

    const sql = neon(process.env.DATABASE_URL);
    await sql`DELETE FROM contact_messages WHERE id = ${id}`;

    return NextResponse.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error("Messages DELETE error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error deleting message" },
      { status: 500 }
    );
  }
}
