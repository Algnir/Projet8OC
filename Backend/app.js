require('dotenv').config(); // Chargement enviro

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet'); 

const projectsRoutes = require('./routes/projects');
const formRoutes = require('./routes/contact');
const pingServer = require('./ping'); // fonction qui ping pour éviter que le serveur soit inactif sur render



// Connexion à MongoDB avec l'enviro
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// Utilisation de CORS
app.use(cors({
    origin: 'https://algnir.github.io', // Autorise uniquement ce domaine
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Disposition']
  }));

// Utilisation de Helmet pour la sécurité (y compris la Content Security Policy)
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // Limite les sources par défaut au même domaine
        scriptSrc: [
          "'self'", 
          "'nonce-abc123'", 
          "https://www.google.com/recaptcha/", // Ajoute la source pour reCAPTCHA
          "https://www.gstatic.com/recaptcha/" // Ajoute la source pour les scripts de reCAPTCHA
        ], // Ajout de Trusted Types
        objectSrc: ["'none'"], // Interdit les objets externes comme Flash
        baseUri: ["'self'"], // Restreint la balise <base> à ce domaine
        formAction: ["'self'"], // Limite les soumissions de formulaires au domaine
        imgSrc: ["'self'", "data:"], // Autorise les images du domaine et les images inline en base64
        upgradeInsecureRequests: [], // S'assure que toutes les requêtes HTTP sont converties en HTTPS
        connectSrc: ["'self'", "https://algnir.github.io"], // Autorise les connexions vers l'API externe
        frameAncestors: ["'none'"], // Empêche l'inclusion de la page dans une iframe (protection contre le clickjacking)
      }
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }, // Masque le referrer pour plus de confidentialité
  }));

// Utilisation de body-parser => Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Les routes
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', formRoutes);
app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});

app.use('/images', cors({
    origin: 'https://algnir.github.io',
    methods: ['GET']
  }), (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin'); // Autorise le partage des ressources entre origines
    next();
  }, express.static(path.join(__dirname, './images')));

setInterval(pingServer, 600000);
pingServer();

module.exports = app;
