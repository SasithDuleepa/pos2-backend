const DB = require('./../../config/database');

const Add = (req,res) =>{
    const{bill_id,customer,date,payment_method,discount,bill_total,net_total,payment_status,items} = req.body;
    console.log(req.body);
    
    if(bill_id !=="" || customer !==""  || date !==""  || payment_method !==""  || discount !==""  || bill_total !==""  || items !=="" ){
        const mysqlFormattedDate = formatDateToMySQLFormat(date);
        const bill_query = `INSERT INTO bill ( bill_id, bill_customer, bil_date, bill_method, bill_discount, bill_total,payment_status,bill_net_total) VALUES ('${bill_id}','${customer}','${mysqlFormattedDate}','${payment_method}','${discount}','${bill_total}','${payment_status}',${net_total})`;  
        DB.connection.query(bill_query, (err, result) => {
            if(result){
                if(items.length > 0){
                    items.forEach(item => {
                        const item_query = `INSERT INTO bill_item (bill_id, bill_item, bill_item_qty, bill_item_price, bill_item_total) VALUES ('${bill_id}','${item.item}','${item.qty}','${item.price}','${item.total}')`;
                        DB.connection.query(item_query, (err, result) => {
                            if(result){
                                const qty_update_query =   `UPDATE stock SET current_qty = current_qty-${item.qty} WHERE stock_item = '${item.item}'`;
                                DB.connection.query(qty_update_query, (err, result) => {
                                    if(result){
                                        res.send({status:200})
                                    }else{
                                        res.send({status:500})
                                    }
                                }
                                )
                        

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

function formatDateToMySQLFormat(inputDate) {
    const parts = inputDate.split('/');
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
  
    return `${year}-${month}-${day}`;
  }
module.exports = Add;


