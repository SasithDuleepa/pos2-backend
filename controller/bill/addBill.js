const DB = require('./../../config/database');

const Add = (req,res) =>{
    const{bill_id,customer,date,payment_method,discount,bill_total,payment_status,items} = req.body;
    console.log(req.body);
    
    if(bill_id !=="" || customer !==""  || date !==""  || payment_method !==""  || discount !==""  || bill_total !==""  || items !=="" ){
        const bill_query = `INSERT INTO bill ( bill_id, bill_customer, bil_date, bill_method, bill_discount, bill_total,payment_status) VALUES ('${bill_id}','${customer}','${date}','${payment_method}','${discount}','${bill_total}','${payment_status}')`;  
        DB.connection.query(bill_query, (err, result) => {
            if(result){
                if(items.length > 0){
                    items.forEach(item => {
                        const item_query = `INSERT INTO bill_item (bill_id, bill_item, bill_item_qty, bill_item_price, bill_item_total) VALUES ('${bill_id}','${item.item}','${item.qty}','${item.price}','${item.total}')`;
                        DB.connection.query(item_query, (err, result) => {
                            if(result){
                                res.send({status:200})
                            }else{
                                res.send({status:500})
                            }
                        })
                    });
                }
            }
            else{
                res.send({status:500})
            }
        })
    }
    
    else{}
     
    

    

}
module.exports = Add;


