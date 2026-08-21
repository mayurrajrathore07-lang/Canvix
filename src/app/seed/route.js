import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const seedData = [
  {
    firstName: "Mayurraj",
    lastName: "Singh",
    email: "mayurraj.singh@webcluesinfotech.com",
    phone: "09090909",
    message: "Hello from seed data",
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Seed with initial data
    for (const entry of seedData) {
      await sql`
        INSERT INTO contact_messages (first_name, last_name, email, phone, message, created_at)
        VALUES (
          ${entry.firstName},
          ${entry.lastName},
          ${entry.email},
          ${entry.phone},
          ${entry.message},
          ${entry.createdAt}
        )
        ON CONFLICT DO NOTHING
      `;
    }

    return NextResponse.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to seed database" },
      { status: 500 }
    );
  }
}
