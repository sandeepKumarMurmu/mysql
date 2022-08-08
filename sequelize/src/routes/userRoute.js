// importing from library
const express = require("express");
const { body } = require("express-validator");

// importing controllers
const CreateUser = require("../controller/create/createUser");
const LoginUser = require("../controller/loginController/login");
const getAll = require("../controller/getUserController/getAll");
const getOne = require("../controller/getUserController/getOne");
const deleteOne = require("../controller/deleteController/deleteOne");
const updatedOne = require("../controller/updatecontroller/update");

// importing validations
const userValidation = require("../middleware/validatin/userValidation");
const loginValidation = require("../middleware/validatin/loginValidation");
const tokenVerification = require("../middleware/validatin/varifyToken");
const updateValidation = require("../middleware/validatin/updateValidation");

// initalizing route
const route = express.Router();

// creating api endpoints
// post end point for new user
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
// login end point for new user
route.post(
  "/login-user",
  body("email").isEmail().withMessage("email is not valid"),
  loginValidation,
  LoginUser
);

// get all data
route.get("/get-user", tokenVerification, getAll);
// get all one
route.get("/get-user/:id", tokenVerification, getOne);
// delete one
route.delete("/remove-user/:id", tokenVerification, deleteOne);
// update one
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
