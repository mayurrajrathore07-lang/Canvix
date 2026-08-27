import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL || "postgres://dummy:dummy@localhost:5432/dummy";
const sql = neon(databaseUrl);

export default sql;
