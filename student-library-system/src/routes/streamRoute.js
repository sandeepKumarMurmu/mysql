// importing Route module from library
const express = require("express");

// importing controllers
const { createStream } = require("../controllers/stream/creatStream");

// initialing route
const route = express.Router();

route.post("/", createStream);

module.exports = route;
