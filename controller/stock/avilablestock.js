
const DB = require('./../../config/database');

const availableStock = (req, res) =>{
    const query = `SELECT * FROM stock WHERE current_qty > 0`;
    DB.connection.query(query, (err, result) => {
        if (err) {
            res.send({status: 500,message: 'Internal server error'})
            console.log(err)
        } else {
            res.send({status: 200,message: 'All suppliers',data: result})
        }
    })
}

module.exports = availableStock;