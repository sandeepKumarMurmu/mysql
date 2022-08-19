// importing Route module from library
const express = require("express");

// importing controllers
const { createStudent } = require("../controllers/student/createStuden");

// initialing route
const route = express.Router();

route.post("/", createStudent);

module.exports = route;
