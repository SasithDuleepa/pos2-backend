const express = require('express');

const Add = require('./../controller/customer/addCustomer');



const router = express.Router();

router.post('/add', Add);

module.exports = router;