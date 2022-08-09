// importing from package
const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenKey = process.env.TOKEN_KEY;

const tokenVerification = async (req, res, next) => {
  const { token } = req.headers;
  
  try {
    jwt.verify(token, tokenKey);
    next();
  } catch (e) {
    return res.status(400).json({
      data: "",
      message: "please login and try again latter",
      hint: e.message,
      status: false,
    });
  }
};

// exporting validation
module.exports = tokenVerification;
