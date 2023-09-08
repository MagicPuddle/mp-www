const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "YourEmailService", // e.g., Gmail
    auth: {
      user: "MagicPuddle@pm.me",
      pass: "your_email_password",
    },
  });

  const mailOptions = {
    from: "your_email@example.com",
    to: "MagicPuddle@pm.me",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending message" }),
    };
  }
};
