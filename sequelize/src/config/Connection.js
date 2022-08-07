// importing from library
const { Sequelize } = require("sequelize");
require("dotenv").config();

// getting enviroment variavles
const db = process.env.DATABASE;
const user = process.env.USER;
const host = process.env.HOST;
const password = process.env.PASSWORD;
const dialect = process.env.DIALECT;

// exporting connection
module.exports = new Sequelize(db, user, password, {
  host,
  dialect,
});
