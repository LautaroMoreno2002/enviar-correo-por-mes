const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (month, text) => {
  try {
    if (month == 1) {
      const info = await transporter.sendMail({
        from: `"Lautaro Moreno"<${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `¡Feliz ${month}° año! ${"💌".repeat(month)}`,
        html: text,
      });
      console.log("Correo enviado:", info.response);
    } else {
      const info = await transporter.sendMail({
        from: `"Lautaro Moreno"<${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `¡Feliz ${month}° mes! ${"💌".repeat(month)}`,
        html: text,
      });
      console.log("Correo enviado:", info.response);
    }
  } catch (error) {
    console.error("Error enviando correo:", error);
  }
};

module.exports = sendEmail;
