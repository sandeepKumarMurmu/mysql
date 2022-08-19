// importing Route module from library
const express = require("express");

// importing controllers
const { createStudent } = require("../controllers/student/createStudent");
const {
  getStudent,
  getStudentByName,
} = require("../controllers/student/getStudent");

// initialing route
const route = express.Router();

route.post("/entry", createStudent);
route.get("/get-by-name", getStudentByName);
route.get("/get", getStudent);

module.exports = route;
