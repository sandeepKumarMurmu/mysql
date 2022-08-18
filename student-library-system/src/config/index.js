// importing from library
const { DataTypes } = require("sequelize");

// importing connection details
const connection = require("./connection");

// importing models
const student = require("../models/studentModel");
const stream = require("../models/streamModel");
const year = require("../models/yearModel");
const book = require("../models/bookModel");
const author = require("../models/authorModel");
const studentBookJunction = require("../models/student_book_junction");
const authorBookJunction = require("../models/author_book_junction");

const db = {};

db.connection = connection;
db.student = student;
db.stream = stream;
db.year = year;
db.book = book;
db.author = author;
db.studentBookJunction = studentBookJunction;
db.authorBookJunction = authorBookJunction;

// relation between stream and student
db.stream.hasMany(db.student, { foreignKey: "streamId" });
db.student.belongsTo(db.stream, { foreignKey: "streamId" });

// relation between stream and student
db.year.hasMany(db.student, { foreignKey: "yearId" });
db.student.belongsTo(db.year, { foreignKey: "yearId" });

// relation between book and student
db.student.belongsToMany(db.book, {
  through: "studentBookJunction",
  foreignKey: "studentId",
});
db.book.belongsToMany(db.student, {
  through: "studentBookJunction",
  foreignKey: "bookId",
});

// realtion between book and author
db.book.belongsToMany(db.author, {
  through: "authorBookJunction",
  foreignKey: "bookId",
});
db.author.belongsToMany(db.book, {
  through: "authorBookJunction",
  foreignKey: "authorId",
});

// relation between book and department
db.stream.hasMany(db.book, { foreignKey: "streamId" });
db.book.belongsTo(db.stream, { foreignKey: "streamId" });

// synchronising tables with database
db.connection.sync({ force: true }).then(({ models }) => {
  console.log(`tables are created and the models are `);
  console.log(models);
});

module.exports = db;
