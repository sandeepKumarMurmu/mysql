const express = require("express");
const createUser = require("../../controller/hasOne/userController/CreateUser");
const getUser = require("../../controller/hasOne/userController/getUser");

const route = express.Router();

route.post("/hasOne/user", createUser);
route.get("/hasOne/user", getUser);

module.exports = route;
