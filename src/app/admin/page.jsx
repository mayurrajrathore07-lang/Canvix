import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard";

async function getMessages() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const messages = await sql`
      SELECT * FROM contact_messages ORDER BY created_at DESC
    `;
    return messages;
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    return [];
  }
}

export const metadata = {
  title: "Admin – Contact Messages | Canvix",
  description: "View all contact form submissions",
};

export default async function AdminPage() {
  // ── Auth Guard ──────────────────────────────────────────────────
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!session || !sessionSecret || session.value !== sessionSecret) {
    redirect("/admin/login");
  }
  // ────────────────────────────────────────────────────────────────

  const messages = await getMessages();
  return <AdminDashboard messages={messages} />;
}
