const DB = require('./../../config/database');

const Add = (req, res) => {
    const { supplier_name , supplier_address , supplier_contact ,supplier_email , supplier_nic } = req.body;
    if(supplier_name==="" || supplier_address==="" || supplier_contact==="" || supplier_email==="" || supplier_nic===""){
        res.send({status: 400,message: 'All fields are required'})
    }else{
        const query = `INSERT INTO supplier (supplier_name , supplier_address , supplier_contact ,supplier_email , supplier_nic) VALUES ('${supplier_name}' , '${supplier_address}' , '${supplier_contact}' , '${supplier_email}' , '${supplier_nic}')`;
        DB.connection.query(query, (err, result) => {
            if (err) {
                res.send({status: 500,message: 'Internal server error'})
            } else {
                res.send({status: 200,message: 'Supplier added successfully'})
            }
        })

    }
}
    

    


module.exports = Add;