import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

const messages = [];

app.post("/api/contact", (req, res) => {
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

  messages.push(contactMessage);

  console.log("New contact message received:", contactMessage);

  return res.status(200).json({
    success: true,
    message: "Contact form submitted successfully.",
    data: contactMessage,
  });
});

app.get("/api/messages", (_, res) => {
  res.status(200).json({ success: true, data: messages });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
