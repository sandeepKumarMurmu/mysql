// importing from library
const express = require("express");
const { body } = require("express-validator");

// importing controllers
const updatedOne = require("../../../controller/updatecontroller/update");
// importing validations
const updateValidation = require("../../../middleware/validation/updateValidation");
const tokenVerification = require("../../../middleware/validation/varifyToken");
// initalizing route
const route = express.Router();

// creating api endpoints
//update one
route.patch(
  "/update-user/:id",
  body("firstName").isLength({ min: 4 }).withMessage("First name is too short"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isAlphanumeric()
    .isLength({ min: 6 })
    .withMessage("Password must be greater than six character / alphanumaric"),
  body("dob").isDate().withMessage("DOB must be in YYYY-MM-DD format"),
  updateValidation,
  tokenVerification,
  updatedOne
);

// exporting route
module.exports = route;
