// importing User model
const { User } = require("../../model/userMode/UserModel");

// create user function
const getOne = async (req, res) => {
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

module.exports = getOne;
