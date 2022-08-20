// importing Route module from library
const express = require("express");

// importing controllers
const { createStudent } = require("../controllers/student/createStudent");
const {
  getStudentById,
  getStudentBySearch,
} = require("../controllers/student/getStudent");

// initialing route
const route = express.Router();

route.post("/entry", createStudent);
route.get("/get/:id", getStudentById);
route.get("/get", getStudentBySearch);

module.exports = route;
