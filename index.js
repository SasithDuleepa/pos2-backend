const express = require('express');
require('dotenv').config();
const DB = require('./config/database');

const CustomerRoutes = require('./routes/customerRoutes');

const app = express();  

DB.connect()


app.use(express.json());

app.use('/customers', CustomerRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});