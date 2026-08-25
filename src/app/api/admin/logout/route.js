import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySession } from "@/lib/auth";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    // Destroy the server-side session
    if (session) {
      destroySession(session.value);
    }

    cookieStore.delete("admin_session");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin logout error:", error);
    return NextResponse.json(
      { success: false, message: "Logout failed." },
      { status: 500 }
    );
  }
}
