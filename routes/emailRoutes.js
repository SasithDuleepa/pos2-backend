const express = require('express');

const SendMails = require('./../controller/email/sendMails');

const router = express.Router();

router.post('/send', SendMails);

module.exports = router;