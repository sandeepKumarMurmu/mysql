// importing Route module from library
const express = require("express");

// importing controllers
const { createStream } = require("../controllers/stream/creatStream");
const { getStream } = require("../controllers/stream/getStreams");

// initialing route
const route = express.Router();

route.post("/entry", createStream);
route.post("/get", getStream);

module.exports = route;
