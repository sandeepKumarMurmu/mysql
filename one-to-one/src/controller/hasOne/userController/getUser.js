const { master_user } = require("../../../config/db"); //master_user model
console.log(new master_user());

// master_user controller
module.exports = async (req, res) => {
  try {
    return res.status(200).json({ message: "inside created user successfull" });
  } catch (e) {
    return res.status(400).json({ message: "error in create user", e });
  }
};
