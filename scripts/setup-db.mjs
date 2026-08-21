import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";

// Load .env manually since this is a standalone script
const envFile = readFileSync(".env", "utf-8");
const envVars = Object.fromEntries(
  envFile
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"))
    .map((line) => line.split("=").map((s) => s.trim()))
    .filter(([key]) => key)
    .map(([key, ...rest]) => [key, rest.join("=")])
);

const DATABASE_URL = envVars["DATABASE_URL"];

if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL not found in .env file");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function setup() {
  console.log("🔌 Connecting to Neon database...");

  try {
    // Create the contact_messages table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id        SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name  TEXT NOT NULL,
        email      TEXT NOT NULL,
        phone      TEXT DEFAULT '',
        message    TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
    console.log("✅ Table 'contact_messages' is ready.");

    // Verify by fetching column info
    const cols = await sql`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'contact_messages'
      ORDER BY ordinal_position
    `;
    console.log("\n📋 Table schema:");
    cols.forEach((c) => console.log(`   ${c.column_name} (${c.data_type})`));

    // Count existing rows
    const [{ count }] = await sql`SELECT COUNT(*) FROM contact_messages`;
    console.log(`\n📊 Existing rows: ${count}`);

    console.log("\n🎉 Database setup complete! Your contact form is ready.");
  } catch (err) {
    console.error("❌ Error setting up database:", err.message);
    process.exit(1);
  }
}

setup();
