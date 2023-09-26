const DB = require('./../../config/database');

const GetAll = (req, res) => {
    const query = `SELECT * FROM supplier`;
    DB.connection.query(query, (err, result) => {
        if (err) {
            res.send({status: 500,message: 'Internal server error'})
        } else {
            res.send({status: 200,message: 'Supplier list',data: result})
        }
    })

}

module.exports = GetAll;