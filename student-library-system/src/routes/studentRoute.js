// importing Route module from library
const express = require("express");
const { body } = require("express-validator");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing controllers
const { createStudent } = require("../controllers/student/createStudent");
const {
  getStudentById,
  getStudentBySearch,
} = require("../controllers/student/getStudent");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// middleware
const inputValidation = require("../middleWare/inputValidation/inputValidation");
const validationMiddl = require("../middleWare/validation/validationMiddle");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// ------------------------------------------------------------------------------------------------------------------------------------------------
// creating end points
route.post(
  "/entry",
  validationMiddl(body).nameValidation,
  validationMiddl(body).emailValidation,
  validationMiddl(body).addressValidation,
  validationMiddl(body).yearValidation,
  validationMiddl(body).streamValidation,
  inputValidation,
  createStudent
);
route.get("/get/:id", getStudentById);
route.get("/get", getStudentBySearch);

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting routes
module.exports = route;
