const { Sequelize, DataTypes } = require("sequelize");

const User = require("../models/userModel");
const Post = require("../models/postModel");

const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const user = process.env.USER;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const db = {};

const seq = new Sequelize(database, user, password, {
  host,
  dialect,
  logging: false,
});

db.sequelize = seq;

db.user = User(seq, DataTypes);
db.post = Post(seq, DataTypes);

db.user.hasOne(db.post, { foreignKey: "user_id" });
db.post.belongsTo(db.user, { foreignKey: "user_id" });

db.sequelize.sync().then(() => {
  console.log(`synchronized to data base`);
});

module.exports = db;
