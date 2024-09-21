
const pool = require('../../db');
const query = require('./queries');

const getEmployees = (req, res) => {
    pool.query(query.getEmployees, (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    });
};


// const addEmployees = (req, res) => {

//     pool.query("INSERT INTO employees", (error, result) => {
//         if(error) throw error;
//         res.status(200).json(result.rows);
//     });
// };
module.exports= {
    getEmployees,
    // addEmployees,
};