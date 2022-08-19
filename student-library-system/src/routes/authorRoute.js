// importing Route module from library
const express = require("express");

// importing controllers
const { createAuthor } = require("../controllers/author/createAuthor");

// initialing route
const route = express.Router();

route.post("/", createAuthor);

module.exports = route;
