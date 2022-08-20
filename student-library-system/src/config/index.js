const db = {};

db.connection = require("./connection");
db.student = require("../models/studentModel");
db.stream = require("../models/streamModel");
db.year = require("../models/yearModel");
db.book = require("../models/bookModel");
db.author = require("../models/authorModel");
db.studentBookJunction = require("../models/student_book_junction");
db.authorBookJunction = require("../models/author_book_junction");
db.authorStreamJunction = require("../models/author_stream_junction");

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
db.connection.sync({ force: false }).then(({ models }) => {
  console.log(`tables are created and the models are `);
  console.log(models);
});

module.exports = db;
