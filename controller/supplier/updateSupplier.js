const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const Update = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;
    const { supplier_name , supplier_address , supplier_contact ,supplier_email , supplier_nic } = req.body;

    if( parameter !== ""){
        const query = `UPDATE supplier SET supplier_name = '${supplier_name}',supplier_address = '${supplier_address}',supplier_contact = '${supplier_contact}',supplier_email = '${supplier_email}',supplier_nic = '${supplier_nic}' WHERE supplier_id = ${parameter}`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status:500 , message:"Internal server error"})
            } else {
                res.send({status:200 , message:"Supplier updated successfully"})
            }
        })
    }   

}
module.exports = Update;