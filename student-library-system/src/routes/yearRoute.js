// importing Route module from library
const express = require("express");

// importing controllers
const { createYear } = require("../controllers/year/createYear");

// initialing route
const route = express.Router();

route.post("/year-entry", createYear);

module.exports = route;
