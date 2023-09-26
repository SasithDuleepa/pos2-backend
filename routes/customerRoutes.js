const express = require('express');

const Add = require('./../controller/customer/addCustomer');
const GetAll = require('./../controller/customer/allCustomers');
const Delete = require('./../controller/customer/deleteCustomer');
const Update = require('./../controller/customer/updateCustomer');

const router = express.Router();

router.post('/add', Add);
router.get('/all', GetAll);
router.delete('/delete', Delete);
router.put('/update', Update)

module.exports = router;