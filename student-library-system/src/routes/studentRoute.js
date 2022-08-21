// importing Route module from library
const express = require("express");
const { body } = require("express-validator");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing controllers
const studentController = require("../controllers/student/studentController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// middleware
const errorValidation = require("../middleWare/validation/errorValidation");
const studentInputFeildValidation = require("../middleWare/validation/studentInputFeildValidation");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");
// ------------------------------------------------------------------------------------------------------------------------------------------------
// initialing route
const route = express.Router();

// ------------------------------------------------------------------------------------------------------------------------------------------------
// creating end points
route.get("/get/:id", studentController.getStudentById);
route.post("/get", studentController.getStudentBySearch);
route.post(
  "/entry",
  // authriseAdmin_Student,
  studentInputFeildValidation(body).nameValidation,
  studentInputFeildValidation(body).emailValidation,
  studentInputFeildValidation(body).addressValidation,
  studentInputFeildValidation(body).yearValidation,
  studentInputFeildValidation(body).streamValidation,
  errorValidation,
  studentController.createStudent
);

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting routes
module.exports = route;
