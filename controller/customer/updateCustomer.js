const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const Update = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;

    const {customer_name,customer_address,customer_contact,customer_email,customer_nic} = req.body;

    if(parameter !== ""){
        const query = `UPDATE customer SET customer_name = '${customer_name}',customer_address = '${customer_address}',customer_contact = '${customer_contact}',customer_email = '${customer_email}',customer_nic = '${customer_nic}' WHERE customer_id = ${parameter}`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status:500 , message:"Internal server error"})
            } else {
                res.send({status:200 , message:"Customer updated successfully"})
            }
        })
    }
}




module.exports = Update;