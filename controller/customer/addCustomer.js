const DB = require('../../config/database');

const Add = (req, res)=>{
    const {customer_name,customer_address,customer_contact,customer_email,customer_nic} = req.body;
    if(customer_name==="" || customer_address==="" || customer_contact==="" || customer_email==="" || customer_nic===""){
        res.send({status:400 , message:"All fields are required"})
    }else{
        const query = `INSERT INTO customer (customer_name,customer_address,customer_contact,customer_email,customer_nic) VALUES ('${customer_name}','${customer_address}','${customer_contact}','${customer_email}','${customer_nic}')`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status:500 , message:"Internal server error"})
            } else {
                res.send({status:200 , message:"Customer added successfully"})
            }
        
        })
    
    }
}
module.exports = Add;