const express = require('express');
const router = express.Router();

const projectsCtrl = require('../controllers/projects');

router.get('/:tag', projectsCtrl.getProjectsByTag);


module.exports = router;