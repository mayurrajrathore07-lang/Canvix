import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contactMessages.json");

export async function GET() {
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf8");
    const messages = JSON.parse(fileContent);
    return NextResponse.json({ success: true, data: Array.isArray(messages) ? messages : [] });
  } catch (error) {
    return NextResponse.json({ success: true, data: [] });
  }
}
