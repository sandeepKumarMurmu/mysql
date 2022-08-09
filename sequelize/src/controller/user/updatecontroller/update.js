// importing User model
const { User } = require("../../../model/userModel/UserModel");

// create user function
const updatedOne = async (req, res) => {
  const { id } = req.params;

  try {
    await User.update(req.body, { where: { id } });
    return res
      .status(200)
      .json({ message: "update successfull", data: "", status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in update one",
      status: false,
    });
  }
};

module.exports = updatedOne;
