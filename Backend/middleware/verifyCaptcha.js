const verifyCaptcha = async (req, res, next) => {
  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ error: 'Le token reCAPTCHA est manquant' });
  }

  const secretKey = `${process.env.SECRET_KEY}`;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  try {
    const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return res.status(400).json({ error: 'Échec de la vérification du CAPTCHA' });
    }

    // Si le CAPTCHA est valide, passez au middleware suivant
    next();
  } catch (error) {
    console.error('Erreur lors de la vérification CAPTCHA:', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la vérification CAPTCHA' });
  }
};

module.exports = verifyCaptcha;
