// // importing from library
const express = require("express");


// importing controllers
const deleteOne = require("../../../controller/user/deleteController/deleteOne");

// importing validations
const tokenVerification = require("../../../middleware/validation/varifyToken");

// initalizing route
const route = express.Router();

// creating api endpoints
// deleting one
route.delete("/remove-user/:id", tokenVerification, deleteOne);

// exporting route
module.exports = route;
