const { Sequelize, DataTypes } = require("sequelize");

// importing model functions
const master_user = require("../models/userModel");
const user_post = require("../models/postModel");
const book = require("../models/bookModel");

// enviroment variable for connection
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const user = process.env.USER;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const db = {};

// creating connection model
const seq = new Sequelize(database, user, password, {
  host,
  dialect,
  logging: false,
});

db.sequelize = seq;

db.master_user = master_user(seq, DataTypes);
db.user_post = user_post(seq, DataTypes);
db.book = book(seq, DataTypes);

// relationships 
db.master_user.hasOne(db.user_post, { foreignKey: "master_user_id" });
db.master_user.belongsTo(db.user_post, { foreignKey: "master_user_id" });

db.master_user.hasMany(db.book, { foreignKey: "master_user_id" });
db.master_user.belongsTo(db.book, { foreignKey: "master_user_id" });
// syncing to database
db.sequelize.sync().then(() => {
  console.log(`synchronized to data base`);
});
// exporting connection model
module.exports = db;
