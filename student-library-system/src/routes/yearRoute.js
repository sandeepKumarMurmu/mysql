// importing Route module from library
const express = require("express");

// importing controllers
const { createYear } = require("../controllers/year/createYear");
const { getYear } = require("../controllers/year/getYear");

// initialing route
const route = express.Router();

route.post("/entry", createYear);
route.get("/get", getYear);

module.exports = route;
