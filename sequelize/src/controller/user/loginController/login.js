// importing token generator
const TokenGenerator = require("../../../utils/functions/generateToken");

// create user function
const LoginUser = async (req, res) => {
  try {
    const token = TokenGenerator(req.body);
    return res
      .status(200)
      .json({ message: "login success", data: token, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in createController",
      status: false,
    });
  }
};

module.exports = LoginUser;
