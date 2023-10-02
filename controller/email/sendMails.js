const DB = require('./../../config/database');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'hotmail', // Use a supported email service or provide SMTP details
    auth: {
        user: 'node-123-123-123@outlook.com',
        pass: 'Node123123'
    }
});

let email = null;
const getMail =(bill_customer) => {
    if(bill_customer){
        // console.log(bill_customer)
        const query = `SELECT * FROM customer WHERE customer_name = '${bill_customer}'`;
         DB.connection.query(query, (err, result) => {
            if(result){
                if(result.length > 0){
                    console.log(result[0].customer_email)
                    email = result[0].customer_email;
                    return result[0].customer_email;
                }
            }
}

)
    }}

const SendMails =async (req,res) =>{
    let billData = [];
    // console.log(req.body)
    const bill_id_list = req.body;
    if(bill_id_list.length > 0){
    //    console.log(bill_id_list)
    bill_id_list.forEach(async (bill_id) => {
        const query_1 = `SELECT * FROM bill WHERE bill_id = '${bill_id}'`;
         DB.connection.query(query_1, (err, result) => {
            if(result){
                billData = billData.concat(result);
                console.log(billData)

                billData.forEach(async (bill) => {
                    console.log(bill.bill_customer)
                    getMail(bill.bill_customer)
                    let mailOptions = {
                        from: 'node-123-123-123@outlook.com',
                        to: email,
                        subject: ''}
                        console.log(mailOptions)
                


                await transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Error:', error);
                    } else {
                        console.log('Email sent:', info.response);
                    }
                });

            })


            }else{console.log(err)}
        })})}
    




}


module.exports = SendMails;