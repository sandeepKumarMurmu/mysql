// importing from library
const express = require("express");

// importing controllers
const getAll = require("../../../controller/getUserController/getAll");
const getOne = require("../../../controller/getUserController/getOne");
const getByName = require("../../../controller/getUserController/searchByName");
// importing validations
const tokenVerification = require("../../../middleware/validation/varifyToken");

// initalizing route
const route = express.Router();

// creating api endpoints
// get by name
route.get("/get-user/byname", tokenVerification, getByName)
// get all users
route.get("/get-user", tokenVerification, getAll);

// get by id
route.get("/get-user/:id", tokenVerification, getOne);


// exporting route
module.exports = route;
