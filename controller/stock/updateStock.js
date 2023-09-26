const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const Update = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;

    const{stock_item,batch_no,supplier,stock_qty,taking_price,selling_price,stock_date,current_qty} = req.body;

    if( parameter !== ""){
        const query = `UPDATE stock SET stock_item = '${stock_item}',batch_no = '${batch_no}',supplier = '${supplier}',stock_qty = '${stock_qty}',taking_price = '${taking_price}',selling_price = '${selling_price}',stock_date = '${stock_date}',current_qty = '${current_qty}' WHERE stock_id = ${parameter}`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status:500 , message:"Internal server error"})
            } else {
                res.send({status:200 , message:"Stock updated successfully"})
            }

        })
    

}

}

module.exports = Update;