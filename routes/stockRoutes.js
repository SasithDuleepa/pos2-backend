const express = require('express');

const Add = require('./../controller/stock/addStock');
const GetAll = require('./../controller/stock/allStock');
const Update = require('./../controller/stock/updateStock');
const ItemAccToName = require('./../controller/stock/itemacctoname');

const router = express.Router();


router.post('/add', Add);
router.get('/all', GetAll)
router.put('/update', Update)
router.get('/itemacctoname', ItemAccToName )

module.exports = router;