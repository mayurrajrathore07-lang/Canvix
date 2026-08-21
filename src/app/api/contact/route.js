import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contactMessages.json");

async function ensureStorageFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf8");
    JSON.parse(fileContent);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

async function readMessages() {
  await ensureStorageFile();
  const fileContent = await fs.readFile(DATA_FILE, "utf8");
  const parsed = JSON.parse(fileContent);
  return Array.isArray(parsed) ? parsed : [];
}

async function writeMessages(messages) {
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf8");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body || {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "First name, last name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactMessage = {
      firstName,
      lastName,
      email,
      phone: phone || "",
      message,
      createdAt: new Date().toISOString(),
    };

    const messages = await readMessages();
    messages.push(contactMessage);
    await writeMessages(messages);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully.",
      data: contactMessage,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Error processing request" },
      { status: 500 }
    );
  }
}
