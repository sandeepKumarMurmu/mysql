// importing Route module from library
const express = require("express");
const { body } = require("express-validator");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing controllers
const studentController = require("../controllers/student/studentController");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// middleware
const inputValidation = require("../middleWare/inputValidation/inputValidation");
const validationMiddl = require("../middleWare/validation/validationMiddle");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// ------------------------------------------------------------------------------------------------------------------------------------------------
// creating end points
route.get("/get/:id", studentController.getStudentById);
route.post("/get", studentController.getStudentBySearch);
route.post(
  "/entry",
  validationMiddl(body).nameValidation,
  validationMiddl(body).emailValidation,
  validationMiddl(body).addressValidation,
  validationMiddl(body).yearValidation,
  validationMiddl(body).streamValidation,
  inputValidation,
  studentController.createStudent
);

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting routes
module.exports = route;
