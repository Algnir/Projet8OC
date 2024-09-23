const Project = require("../models/Project");
const fs = require("fs");

exports.getProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      res.status(200).json(projects); // Envoie des projets filtrés en réponse
    })
    .catch((error) => {
      res.status(400).json({ error }); // Gestion de l'erreur
    });
};