const mysql = require("mysql");
const { Sequelize } = require('sequelize');
require("dotenv").config();

// const connection = mysql.createConnection({
//  host: process.env.BD_HOST,
// user: process.env.BD_USER,
// password: process.env.BD_PASSWORD,
// database: process.env.BD_DATABASE,
// });

// connection.connect((err) => {
// let message = !err ? "connected" : `connection failed : ${err}`;
// console.log(`mysql : ${message}`);
// });

module.exports = new Sequelize(process.env.BD_DATABASE, process.env.BD_USER, process.env.BD_PASSWORD, {
host: 'localhost',
dialect: 'mysql',
});

// module.exports = connection;
