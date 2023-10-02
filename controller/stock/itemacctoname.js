const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const ItemAccToName = (req,res) =>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const item  = queryParams.item;
    
    if(item == null){
        res.send({status: 400,message: 'Bad request'})
    }else{
            const search_query = `SELECT * FROM stock WHERE stock_item LIKE '%${item}%'`;
            DB.connection.query(search_query, (err, result) => {
                if (err) {
                    res.send({status: 500,message: 'Internal server error'})
                } else {
                    res.send({status: 200,message: 'All suppliers',data: result})
                }
            })
        }

    

}
module.exports = ItemAccToName;