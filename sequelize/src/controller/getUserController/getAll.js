// importing User model 
const {User} = require("../../model/userMode/UserModel")


// create user function
const getAll = async (req, res) => {
  try {
    
    const data = await User.findAll();
    return res
      .status(200)
      .json({ message: "login success", data, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in createController",
      status: false,
    });
  }
};

module.exports = getAll;
