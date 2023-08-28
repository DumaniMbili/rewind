const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  // Validate form data (ensure all fields are filled)
  if (!name || !phone || !email || !subject || !message) {
    // Handle the error case (e.g., send an error response)
    return res.status(400).send("Please fill in all fields.");
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can change this to your email service
    auth: {
      user: "your.email@gmail.com", // Replace with your email
      pass: "yourpassword", // Replace with your email password
    },
  });

  // Prepare email content
  const mailOptions = {
    from: email,
    to: "cristellebarbeau4@gmail.com", // Replace with the recipient email address
    subject: "Rewind Query",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Handle the error case
      console.error(error);
      return res
        .status(500)
        .send(
          "There was an error sending your message. Please try again later."
        );
    }

    // Send a success response to the user
    console.log("Message sent: %s", info.messageId);
    res.send("Thank you! Your message has been sent.");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
