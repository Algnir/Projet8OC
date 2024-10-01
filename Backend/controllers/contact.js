const nodemailer = require("nodemailer");

exports.form = (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporter de l'email
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    subject: "Contact Portfolio",
    text: `${message} from ${name} contact: ${email}`,
  };

  // Envoyer l'email et gestion de l'erreur
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
    } else {
      return res.status(200).json({ message: "Message reçu avec succès!" });
    }
  });
};
