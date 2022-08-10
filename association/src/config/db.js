const Sequelize = require("sequelize");
require("dotenv").config();
const reader = require("../model/reader/reader");
const author = require("../model/autor/author");
const book = require("../model/books/book");
const vehicle = require("../model/vehicle/vehicle");

const db = {};

const password = process.env.PASSWORD;
const user = process.env.USER;
const database = process.env.DATABASE;
const dialect = process.env.DIALECT;
const host = process.env.HOST;

const sequelize = new Sequelize(database, user, password, { host, dialect });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reader = reader(sequelize, Sequelize);
db.author = author(sequelize, Sequelize);
db.book = book(sequelize, Sequelize);
db.vehicle = vehicle(sequelize, Sequelize);

db.reader.hasOne(db.vehicle, { foreignKey: "readerId" });
db.book.belongsToMany(db.reader, { through: "bookReader" });
db.reader.belongsToMany(db.book, { through: "bookReader" });
db.author.belongsToMany(db.book, { through: "bookAuthor" });
db.book.belongsToMany(db.author, { through: "bookAuthor" });

db.sequelize.sync().then(() => {
  console.log("connected to db ---------------------");
});
module.exports = db;
