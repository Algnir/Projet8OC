require('dotenv').config(); // Chargement enviro

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 

const projectsRoutes = require('./routes/projects');
const formRoutes = require('./routes/contact');

// Connexion à MongoDB avec l'enviro
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Utilisation de CORS (Pour les Headers)
app.use(cors());

// Utilisation de body-parser => Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Les routes
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', formRoutes);


module.exports = app;
