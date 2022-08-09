// importing User model
const { User } = require("../../../model/userModel/UserModel");
const { Op } = require("sequelize");

// create user function
const getAll = async (req, res) => {
  try {

    console.log(req.cookeis)


    const count = await User.count();
    const limit = +req.query.limit||5;
    const page = +req.query.page||1;
    const sort =
      req.query.sort == 1 ? "ASC" : req.query.sort == -1 ? "DESC" : "ASC";

    const size = limit || 3;
    const skip = (page - 1) * size;
    // if(skip>)
  const data= await User.findAndCountAll({
      order: [["id", `${sort}`]],
      limit: size,
      offset: skip,
    });
    return res
      .status(200)
      .json({ message: "message from getall", data, status: true });
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
