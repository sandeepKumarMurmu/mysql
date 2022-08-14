const { Sequelize, DataTypes } = require("sequelize");

// importing model functions
const master_user = require("../models/userModel");
const user_post = require("../models/postModel");
const book = require("../models/bookModel");
const post_user_join_table = require("../models/post_user_join_table");

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
  logging: !true,
});

db.sequelize = seq;

db.master_user = master_user(seq, DataTypes);
db.user_post = user_post(seq, DataTypes);
db.book = book(seq, DataTypes);
db.join_table = post_user_join_table(
  seq,
  DataTypes,
  db.master_user,
  db.user_post
);

// // relationships
// db.master_user.hasOne(db.user_post, { foreignKey: "master_user_id" });
// db.user_post.belongsTo(db.master_user, { foreignKey: "master_user_id" });

// // one to many
// db.master_user.hasMany(db.book, { foreignKey: "master_user_id" });
// db.book.belongsTo(db.master_user, { foreignKey: "master_user_id" });

db.master_user.belongsToMany(db.user_post, { through: db.join_table });
db.user_post.belongsToMany(db.master_user, { through: db.join_table });
// syncing to database
db.sequelize.sync().then(() => {
  console.log(`synchronized to data base`);
});
// exporting connection model
module.exports = db;
