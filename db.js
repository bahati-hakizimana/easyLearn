// const pool = require('pg').pool;
// const pool = new pool({
//     user : "postgres",
//     host: "localhost",
//     database: "employees",
//     password: "bahati",
//     port: 5432,
// });











const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "employees",
    password: "bahati",
    port: 5432,
});

module.exports = pool;