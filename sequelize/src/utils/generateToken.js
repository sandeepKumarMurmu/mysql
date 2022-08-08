// importing from library
const jwt = require("jsonwebtoken");
require("dotenv").config();

// token key
const tokenKey = process.env.TOKEN_KEY;

module.exports = (data) => {
  return jwt.sign(data, tokenKey, { expiresIn: 60*30 });
};
