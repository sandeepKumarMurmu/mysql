// importing from library
const { validationResult } = require("express-validator");

// importing function for hash password
const Hashing = require("../../utils/hashPassword");

// importing user model
const { User } = require("../../model/userMode/UserModel");

const userValidation = async (req, res, next) => {
  const { email, password } = req.body;

  // hashing password
  req.body.password = Hashing(password);

  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: errors.errors.map((ele)=>ele.msg).join(", "), data: [], status: false });
  }
  try {
    const oldUser = await User.findOne({ where: { email } });

    if (oldUser)
      return res.status(400).json({
        message: "user already exist please try another email",
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
module.exports = userValidation;
