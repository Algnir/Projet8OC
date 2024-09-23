import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Veuillez vérifier le CAPTCHA.");
      return;
    }

    const contactData = { name, email, message, captchaToken };

    try {
      const response = await fetch(
        "http://localhost:4000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (response.ok) {
        setStatus("Message envoyé avec succès!");
        setName("");
        setEmail("");
        setMessage("");
        setCaptchaToken("");
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section id="contact">
      <div className="Form">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Votre nom:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Votre email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6Lf-tjwqAAAAAK3OpWb1tUIPGr0CqVOfrOXSqEC0"
            onChange={handleCaptchaChange}
            className="captcha"
          />
          <button type="submit">Envoyer</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
