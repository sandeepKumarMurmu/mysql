// importing from library
const { validationResult } = require("express-validator");

// importing user model
const { User } = require("../../model/userModel/UserModel");

// // comparing hashed function
const compare = require("../../utils/functions/comparePassword");

const loginValidation = async (req, res, next) => {
  console.log(req.body);
  let errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: errors.errors[0].msg, data: [], status: false });
  }
  try {
    const oldUser = await User.findOne({ where: { email } });

    if (!oldUser)
      return res.status(400).json({
        message: "email or password is not correct",
        data: [],
        status: false,
      });
    if (!compare(password, oldUser.password))
      return res.status(400).json({
        message: "email or password is not correct",
        data: [],
        status: false,
      });

    next();
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in login validation",
      status: false,
    });
  }
};

// exporting validation
module.exports = loginValidation;
