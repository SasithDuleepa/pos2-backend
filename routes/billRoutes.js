const express = require('express');

const Add = require ('./../controller/bill/addBill');

const router = express.Router();


router.post('/add', Add);

module.exports = router;