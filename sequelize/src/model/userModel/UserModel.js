// import from library
const { DataTypes } = require("sequelize");

// importing database
const db = require("../../config/Connection");

// creating user model
const User = db.define(
  "user",
  {
    firstName: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: true, trim: true },
    middleName: { type: DataTypes.STRING, allowNull: true, trim: true },
    gender: { type: DataTypes.STRING, allowNull: false, trim: true },
    dateOfBirth: { type: DataTypes.DATE, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      unique: true,
    },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: true }
);

// synchronisig with databse

db.sync().then((res) => {
  console.log("table is created------------------");
});

// exporting model
module.exports = { User };
