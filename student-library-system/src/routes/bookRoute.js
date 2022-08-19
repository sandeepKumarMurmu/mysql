// importing Route module from library
const express = require("express");

// importing controllers
const { createBook } = require("../controllers/book/createBook");

// initialing route
const route = express.Router();

route.post("/", createBook);

module.exports = route;
