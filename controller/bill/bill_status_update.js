const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const Bill_status_Update = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const bilId  = queryParams.id;
   
    console.log(req.body.payment_status)
    if(req.body.payment_status === 'paid' || req.body.payment_status === 'unpaid') {
       
        const query = `UPDATE bill SET payment_status = '${req.body.payment_status}' WHERE bill_id = '${bilId}'`;
        DB.connection.query(query,(err,result)=>{
            if(result){
                res.send({status:200,data:result})
            }else{
                res.send({status:500})
                console.log(err)
            }
          })
    }
    }
    
    




module.exports = Bill_status_Update;