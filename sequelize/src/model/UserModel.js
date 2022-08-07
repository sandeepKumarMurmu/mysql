const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/Connection")

const User = db.define(
  "sand",
  {
    fullName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  },
  { timestamps: true }
);

db.sync();

module.exports = { User };
