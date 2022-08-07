const express = require("express");

const Create = require("../controller/Create/index");
const Get = require("../controller/Get");
const Update = require("../controller/Update");
const Remove = require("../controller/Delete");

const route = express.Router();

route.post("/new-student", Create);
route.get("/get-student", Get);
route.patch("/update-student/:id", Update);
route.delete("/remove-student/:id", Remove);

module.exports = route;
