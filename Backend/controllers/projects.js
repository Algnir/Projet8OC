const Project = require("../models/Project");
const fs = require("fs");

exports.getProjectsByTag = (req, res, next) => {
  const tag = req.params.tag; // Récupère le tag de la requête

  Project.find({ tag: tag }) // Récupération des travaux par le tag
    .then((projects) => {
      res.status(200).json(projects); // Envoie des projets filtrés en réponse
    })
    .catch((error) => {
      res.status(400).json({ error }); // Gestion de l'erreur
    });
};