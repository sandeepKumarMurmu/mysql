// importing User model
const { User } = require("../../../model/userModel/UserModel");

// create user function
const GetById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findOne({ where: { id } });
    return res
      .status(200)
      .json({ message: "login success", data, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in find one",
      status: false,
    });
  }
};

module.exports = GetById;
