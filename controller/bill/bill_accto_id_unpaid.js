const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const BillAccToIdUnpaid = (req,res) =>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const bilId  = queryParams.id;
    console.log(bilId)

    if(bilId){
        const query = `SELECT * FROM bill WHERE bill_id LIKE '%${bilId}%' AND payment_status = 'unpaid'`;

        DB.connection.query(query,(err,result)=>{
            if(result){
                res.send({status:200,data:result})
            }else{
                res.send({status:500})
                console.log(err)
            }
          }
          )}
        }
          
module.exports=BillAccToIdUnpaid;