const express = require("express");
const createUser = require("../controller/user/createUser");
const getUser = require("../controller/user/getUsers");

const route = express.Router();

route.post("/user", createUser);
route.get("/user", getUser);

module.exports = route;
