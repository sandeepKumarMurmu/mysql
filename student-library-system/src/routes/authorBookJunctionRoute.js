// importing Route module from library
const express = require("express");

// importing controllers
const {
  createAuthorBookJunction,
} = require("../controllers/author_book_junction/create_author_book_junction");

// initialing route
const route = express.Router();

route.post("/", createAuthorBookJunction);

module.exports = route;
