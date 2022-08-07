const { User } = require("../model/UserModel");
const express = require("express");

const route = express.Router();

route.post("/post", async (req, res) => {
  const { firstName, lastName, age } = req.body;
  try {
    const user = await User.create({
      fullName: `${firstName} ${lastName}`,
      age,
    });
    return res.send({ data: user, status: true });
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

route.get("/get", async (req, res) => {
  try {
    const user = await User.findAll();

    return res.send({ data: user, status: true });
  } catch (e) {
    console.log(e);
    return res.send({ data: "error in get ", status: false });
  }
});

route.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  let obj = { fullName: `${req.body.firstName} ${req.body.lastName} ` };
  try {
    const update = await User.update(obj, { where: { id } });

    return res.send({ data: "updated ", status: true });
  } catch (e) {
    console.log(e);
    return res.send({ data: "error in update ", status: false });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    
    await User.destroy({ where: { id } });

    return res.send({ data: "updated ", status: true });
  } catch (e) {
    console.log(e);
    return res.send({ data: "error in delete ", status: false });
  }
});

module.exports = route;
