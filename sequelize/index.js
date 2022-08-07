const express = require("express");
const { Sequelize,DataTypes } = require("sequelize");
const sqlite = require("sqlite3")

const connection = new Sequelize("allen_1", "root", "XYZ4648s@nDEEP", {
  host: "localhost",
  dialect: "mysql",
});

const app = express();


const model = new Sequelize('sqlite::memory:');

const User = model.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(model.models.User)
console.log(User === model.models.User); // true

app.listen(2345,async () => {
    try {
        await connection.authenticate();
        // console.log('Connection has been established successfully.');
        console.log("connected on port 2345....");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});
