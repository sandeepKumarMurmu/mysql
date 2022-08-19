// importing Route module from library
const express = require("express");

// importing controllers
const {
  createAuthorstreamJunction,
} = require("../controllers/author_stream_junction/create_author_stream_junction");

// initialing route
const route = express.Router();

route.post("/", createAuthorstreamJunction);

module.exports = route;
