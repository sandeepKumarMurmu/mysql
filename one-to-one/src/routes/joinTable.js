const express = require("express");
const joinTableCreate = require("../controller/joinTable/createTable");
// const getUser = require("../controller/user/getUsers");

const route = express.Router();

route.get("/jointable", joinTableCreate);
// route.get("/user", getUser);

module.exports = route;
