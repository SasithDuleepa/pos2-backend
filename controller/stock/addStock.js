const DB = require('./../../config/database');


const Add = (req, res) => {
    const{stock_item,batch_no,supplier,stock_qty,taking_price,selling_price,stock_date} = req.body;
    if(stock_item==="" || batch_no==="" || supplier==="" || stock_qty==="" || taking_price==="" || selling_price==="" || stock_date===""){
        res.send({status: 400,message: 'All fields are required'})
    }else{
        const query = `INSERT INTO stock (stock_item , batch_no , supplier , stock_qty , taking_price , selling_price , stock_date ,current_qty) VALUES 
                                    ('${stock_item}' , '${batch_no}' , '${supplier}' , '${stock_qty}' , '${taking_price}', '${selling_price}', '${stock_date}', '${stock_qty}')`;
            DB.connection.query(query, (err, result) => {
                if (err) {
                    res.send({status: 500,message: 'Internal server error'})
                } else {
                    res.send({status: 200,message: 'Stock added successfully'})
                }
            }
            )
        }
       
    }
  

    


module.exports = Add;