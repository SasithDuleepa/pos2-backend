const DB = require('./../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const BillAccToId = (req,res) =>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const start_Date  = queryParams.start_date;
    const end_Date  = queryParams.end_date;
    console.log(queryParams)

    const startDate = formatDateToMySQLFormat(start_Date);
    const endDate = formatDateToMySQLFormat(end_Date);

    if( startDate == null || endDate == null){
        res.send({status: 400,message: 'Bad request'})
    }else{
        const query = `SELECT * FROM bill WHERE bil_date BETWEEN '${startDate}' AND '${endDate}'`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status: 500,message: 'Internal server error'})
                console.log(err)
            } else {
                res.send({status: 200,message: 'All suppliers',data: result})
            }
        }

        )}}
    
        function formatDateToMySQLFormat(inputDate) {
           
            if (/^\d{4}-\d{2}-\d{2}$/.test(inputDate)) {
              return inputDate; 
            }
          
            
            const parts = inputDate.split('/');
            const month = parts[0].padStart(2, '0');
            const day = parts[1].padStart(2, '0');
            const year = parts[2];
          
            return `${year}-${month}-${day}`;
          }
          
module.exports=BillAccToId;