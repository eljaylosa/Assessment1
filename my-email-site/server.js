// netlify diff - di pala kaya i handle ng netlify ang node.js for backend sana which is sucks
// P.S. this shi only works on my localhost server vruh
// ba't kase may bayad pa mga servers ngina naman oh

require('dotenv').config({ path: __dirname + '/.env' });
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // create transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.GMAIL_USER, 
    subject: `New message from ${name}`,
    text: message,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b><br>${message}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Full Nodemailer error:", err);

    // send error details back to the frontend
    let errorMsg = "Error sending email";
    if (err.response) {
      errorMsg += `: ${err.response}`;
    } else if (err.message) {
      errorMsg += `: ${err.message}`;
    }
    res.status(500).json({ message: errorMsg });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
