// importing Route module from library
const express = require("express");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing controllers
const studentController = require("../controllers/student/studentController");
const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");

// ------------------------------------------------------------------------------------------------------------------------------------------------
// middleware
const errorValidation = require("../middleWare/validation/errorValidation");
const FeildValidation = require("../middleWare/validation/feildValidation");
// const authriseAdmin_Student = require("../middleWare/validation/authriseAdmin_Student");
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
  FeildValidation.nameValidation,
  FeildValidation.emailValidation,
  FeildValidation.addressValidation,
  FeildValidation.yearValidation,
  FeildValidation.streamValidation,
  errorValidation,
  studentController.createStudent
);

// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting routes
module.exports = route;
