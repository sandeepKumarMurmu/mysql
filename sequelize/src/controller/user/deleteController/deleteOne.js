// importing User model
const { User } = require("../../../model/userModel/UserModel");

// create user function
const deleteOne = async (req, res) => {
  const { id } = req.params;
  console.log(typeof id)
  
  try {
    await User.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: "deleted successfully", data: [], status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in find one",
      status: false,
    });
  }
};

module.exports = deleteOne;
