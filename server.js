import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "contactMessages.json");

const app = express();
const PORT = 5000;

app.use(express.json());

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
  const fileContent = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(fileContent);
}

async function writeMessages(messages) {
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf8");
}

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "First name, last name, email, and message are required.",
    });
  }

  const contactMessage = {
    firstName,
    lastName,
    email,
    phone: phone || "",
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    const messages = await readMessages();
    messages.push(contactMessage);
    await writeMessages(messages);

    console.log("New contact message received:", contactMessage);

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: contactMessage,
    });
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to save the message right now.",
    });
  }
});

app.get("/api/messages", async (_, res) => {
  try {
    const messages = await readMessages();
    return res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Failed to read contact messages:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to read saved messages.",
    });
  }
});

await ensureStorageFile();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Saved contact messages: ${DATA_FILE}`);
});
