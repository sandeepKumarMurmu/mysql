const express = require("express");
const create= require("../controller/user/createUser")


const route = express.Router();

route.post("/post",create)

module.exports=route;