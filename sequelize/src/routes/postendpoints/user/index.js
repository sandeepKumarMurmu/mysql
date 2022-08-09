// importing from library
const express = require("express");
const { body } = require("express-validator");

// importing controllers
const CreateUser = require("../../../controller/createController.js/createUser");
const LoginUser = require("../../../controller/loginController/login");
// importing validations
const loginValidation = require("../../../middleware/validation/loginValidation");
const userValidation = require("../../../middleware/validation/userValidation");
// initalizing route
const route = express.Router();

// creating api endpoints
// create user
route.post(
  "/new-user",
  body("firstName").isLength({ min: 4 }).withMessage("First name is too short"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isAlphanumeric()
    .isLength({ min: 6 })
    .withMessage("Password must be greater than six character / alphanumaric"),
  body("dob").isDate().withMessage("DOB must be in YYYY-MM-DD format"),
  userValidation,
  CreateUser
);

// login end point
route.post(
  "/login-user",
  body("email").isEmail().withMessage("email is not valid"),
  loginValidation,
  LoginUser
);

// exporting route
module.exports = route;
