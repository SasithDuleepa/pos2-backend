const express = require('express');

const Add = require('./../controller/supplier/addSupplier');
const GetAll = require('./../controller/supplier/allSupplier');
const Delete = require('./../controller/supplier/deleteSupplier');
const Update = require('./../controller/supplier/updateSupplier');

const router = express.Router();

router.post('/add', Add);
router.get('/all', GetAll);
router.delete('/delete', Delete);
router.put('/update', Update)

module.exports = router;