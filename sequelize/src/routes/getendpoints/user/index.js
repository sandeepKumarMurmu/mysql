// importing from library
const express = require("express");

// importing controllers
const getAll = require("../../../controller/user/getUserController/getAll");
const GetById = require("../../../controller/user/getUserController/getById");
const getByName = require("../../../controller/user/getUserController/searchByName");
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
route.get("/get-user/:id", tokenVerification, GetById);


// exporting route
module.exports = route;
