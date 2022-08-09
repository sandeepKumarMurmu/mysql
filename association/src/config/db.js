const Sequelize = require("sequelize");
require("dotenv").config();
const User = require("../model/user/user");
const contact = require("../model/contactInfo/contact");
const { has } = require("sequelize");

const db = {};

const password = process.env.PASSWORD;
const user = process.env.USER;
const database = process.env.DATABASE;
const dialect = process.env.DIALECT;
const host = process.env.HOST;

const sequelize = new Sequelize(database, user, password, { host, dialect });

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userx = User(sequelize, Sequelize);
db.contact = contact(sequelize, Sequelize);

db.userx.hasOne(db.contact, {
  foreignKey: "userxId",
});

db.sequelize.sync().then(() => {
  console.log("connected to db ---------------------");
});
module.exports = db;
