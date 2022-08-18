// importing from library
const { DataTypes } = require("sequelize");

// importing connection details
const connection = require("./connection");

const db = {};

db.connection = connection;

// synchronising tables with database
db.connection.sync().then(({ models }) => {
  console.log(`tables are created and the models are `);
  console.log(models);
});

module.exports = db;
