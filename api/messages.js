import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join("/tmp", "data");
const DATA_FILE = path.join(DATA_DIR, "contactMessages.json");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf8");
    const messages = JSON.parse(fileContent);
    return res.status(200).json({ success: true, data: Array.isArray(messages) ? messages : [] });
  } catch (error) {
    return res.status(200).json({ success: true, data: [] });
  }
}
