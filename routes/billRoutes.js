const express = require('express');

const Add = require ('./../controller/bill/addBill');
const BillAccToId = require ('./../controller/bill/bill_accto_bllId');
const BillAccToDateRange = require ('./../controller/bill/bill_accto_daterange');
const BillAccToDateRangeUnpaid = require ('./../controller/bill/bill_daterange_unpaid');
const BillAccToIdUnpaid = require ('./../controller/bill/bill_accto_id_unpaid');
const BillItems_id = require ('./../controller/bill/billItems_accto_id');

const router = express.Router();


router.post('/add', Add);
router.get('/billaccid', BillAccToId)
router.get('/billaccdaterange', BillAccToDateRange)
router.get('/billaccdaterangeunpaid', BillAccToDateRangeUnpaid)
router.get('/billaccidunpaid', BillAccToIdUnpaid)
router.get('/billitemsid', BillItems_id)    



module.exports = router;