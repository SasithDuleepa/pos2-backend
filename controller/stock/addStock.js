const DB = require('./../../config/database');


const Add = (req, res) => {
    console.log(req.body);

    const{stock_item,batch_no,supplier,stock_qty,taking_price,selling_price,stock_date} = req.body;
    if(stock_item==="" || batch_no==="" || supplier==="" || stock_qty==="" || taking_price==="" || selling_price==="" || stock_date===""){
        res.send({status: 400,message: 'All fields are required'})
    }else{
        const mysqlFormattedDate = formatDateToMySQLFormat(stock_date);
        const query = `INSERT INTO stock (stock_item , batch_no , supplier , stock_qty , taking_price , selling_price , stock_date ,current_qty) VALUES 
                                    ('${stock_item}' , '${batch_no}' , '${supplier}' , ${stock_qty} , ${taking_price}, ${selling_price}, '${mysqlFormattedDate}', ${stock_qty})`;
            DB.connection.query(query, (err, result) => {
                if (err) {
                    res.send({status: 500,message: 'Internal server error'})
                    console.log(err);
                } else {
                    res.send({status: 200,message: 'Stock added successfully'})
                }
            }
            )
        }
       
    }
  
    function formatDateToMySQLFormat(inputDate) {
        const parts = inputDate.split('-');
        const year = parts[0].padStart(2, '0');
        const day = parts[1].padStart(2, '0');
        const month = parts[2];
       console.log(`${year}-${month}-${day}`)
        return `${year}-${month}-${day}`;
      }
    


module.exports = Add;