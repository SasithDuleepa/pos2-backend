const DB = require('./../../config/database');

const GetAll = (req, res) => {
    const query = `SELECT * FROM stock`;
    DB.connection.query(query, (err, result) => {
        if (err) {
            res.send({status: 500,message: 'Internal server error'})
        } else {
            res.send({status: 200,message: 'All suppliers',data: result})
        }
    })

}

module.exports = GetAll;