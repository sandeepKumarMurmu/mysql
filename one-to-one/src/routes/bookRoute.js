const express = require("express");
const create_book = require("../controller/books/createBook");
const get_book = require("../controller/books/getBook");
// const update_user_post = require("../controller/post/updatepost");

const route = express.Router();

route.post("/book", create_book);
route.get("/book", get_book);
// route.patch("/post", update_user_post);

module.exports = route;
