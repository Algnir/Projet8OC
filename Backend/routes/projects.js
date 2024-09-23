const express = require('express');
const router = express.Router();

const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.getProjects);


module.exports = router;