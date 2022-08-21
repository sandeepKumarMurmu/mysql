// ------------------------------------------------------------------------------------------------------------------------------------------------
// importing from library
const { verify } = require("jsonwebtoken");
require("dotenv").config();

const tokenKey = process.env.TOKEN_KEY;
// ------------------------------------------------------------------------------------------------------------------------------------------------
// exporting authriseAdmin_Student
module.exports = async (req, res, next) => {
  try {
    verify(req.headers.token, tokenKey);
    next();
  } catch (e) {
    return res.status(400).json({
      data: [],
      message: "error in authriseAdmin_Student middle ware",
      e,
      status: false,
    });
  }
};
