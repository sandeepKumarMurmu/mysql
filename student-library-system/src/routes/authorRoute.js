// importing Route module from library
const express = require("express");

// importing controllers
const { createAuthor } = require("../controllers/author/createAuthor");
const {
  getAuthorbyId,
  getBySearch,
} = require("../controllers/author/getAuthor");

// initialing route
const route = express.Router();

route.post("/entry", createAuthor);
route.get("/get/:id", getAuthorbyId);
route.get("/get", getBySearch);

module.exports = route;
