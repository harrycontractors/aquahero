import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

// Handle form submissions
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your@gmail.com",
        pass: "YOUR_APP_PASSWORD" 
      }
    });

    await transporter.sendMail({
      from: email,
      to: "harrycontractorsenquiry@gmail.com",
      subject: "Aquahero Website Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    res.status(200).send("OK");
  } catch (err) {
    res.status(500).send("ERROR");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
