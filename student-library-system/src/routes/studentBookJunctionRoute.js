// importing Route module from library
const express = require("express");

// importing controllers
const {
  createStudentBookJunction,
} = require("../controllers/student_book_junction/create_student_book_junction");

// initialing route
const route = express.Router();

route.post("/", createStudentBookJunction);

module.exports = route;
