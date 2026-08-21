import { neon } from "@neondatabase/serverless";
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
  const messages = await getMessages();
  return <AdminDashboard messages={messages} />;
}
