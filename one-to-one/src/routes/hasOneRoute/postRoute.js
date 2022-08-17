const express = require("express");
const create_user_post = require("../../controller/hasOne/postController/createPost");
// const get_all_post = require("../controller/post/getPost");
// const update_user_post = require("../controller/post/updatepost");

const route = express.Router();

route.post("/hasOne/post", create_user_post);
// route.get("/post", get_all_post);
// route.patch("/post", update_user_post);

module.exports = route;
