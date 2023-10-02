const express = require('express');

const Add = require ('./../controller/bill/addBill');
const BillAccToId = require ('./../controller/bill/bill_accto_bllId');

const router = express.Router();


router.post('/add', Add);
router.get('/billaccid', BillAccToId)

module.exports = router;