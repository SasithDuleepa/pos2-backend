const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const Delete = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;
    // console.log(parameter)
    if(parameter !== ""){
        const query = `DELETE FROM customer WHERE customer_id = ${parameter}`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status:500 , message:"Internal server error"})
            } else {
                res.send({status:200 , message:"Customer deleted successfully"})
            }
        })
    }
}

module.exports = Delete;