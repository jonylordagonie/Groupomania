// const mysql = require("mysql");

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

const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.BD_DATABASE,
  process.env.BD_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
