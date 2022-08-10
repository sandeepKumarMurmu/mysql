const express = require("express");
const createpost = require("../controller/post/createPost");
const getpost = require("../controller/post/getPost");
const updatepost = require("../controller/post/updatepost");

const route = express.Router();

route.post("/post", createpost);
route.get("/post", getpost);
route.patch("/post", updatepost);

module.exports = route;
