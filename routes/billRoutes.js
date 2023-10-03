const express = require('express');

const Add = require ('./../controller/bill/addBill');
const BillAccToId = require ('./../controller/bill/bill_accto_bllId');
const BillAccToDateRange = require ('./../controller/bill/bill_accto_daterange');
const BillAccToDateRangeUnpaid = require ('./../controller/bill/bill_daterange_unpaid');

const router = express.Router();


router.post('/add', Add);
router.get('/billaccid', BillAccToId)
router.get('/billaccdaterange', BillAccToDateRange)
router.get('/billaccdaterangeunpaid', BillAccToDateRangeUnpaid)

module.exports = router;