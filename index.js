const express = require('express');
require('dotenv').config();
const DB = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

const CustomerRoutes = require('./routes/customerRoutes');
const SupplierRoutes = require('./routes/supplierRoutes');
const StockRoutes = require('./routes/stockRoutes');
const BillRoutes = require('./routes/billRoutes');  

const app = express();  

DB.connect()


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000',}));

app.use('/customers', CustomerRoutes);
app.use('/suppliers', SupplierRoutes);
app.use('/stock', StockRoutes);
app.use('/bills', BillRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});