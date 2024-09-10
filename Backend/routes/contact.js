const express = require('express');
const router = express.Router();
const verifyCaptcha = require('../middleware/verifyCaptcha');


const contactCtrl = require('../controllers/contact');

router.post('/', verifyCaptcha, contactCtrl.form);


module.exports = router;