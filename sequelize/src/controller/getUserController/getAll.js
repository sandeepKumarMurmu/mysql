// importing User model
const { User } = require("../../model/userMode/UserModel");
const { Op } = require("sequelize");

// create user function
const getAll = async (req, res) => {
  try {
    const count = await User.count();
    console.log(count);
    const limit = +req.query.limit||5;
    const page = +req.query.page||1;
    const sort =
      req.query.sort == 1 ? "ASC" : req.query.sort == -1 ? "DESC" : "ASC";

    const size = limit || 3;
    const skip = (page - 1) * size;
    // if(skip>)
    const data = await User.findAll({
      order: [["id", `${sort}`]],
      limit: size,
      offset: skip,
    });
    return res
      .status(200)
      .json({ message: "login success", data, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in createController",
      status: false,
    });
  }
};

module.exports = getAll;
