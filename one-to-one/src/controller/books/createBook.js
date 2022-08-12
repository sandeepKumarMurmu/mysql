const { master_user, book } = require("../../config/db"); //master_user model

// master_user controller
module.exports = async (req, res) => {
  try {
    const data = await book.create(req.body);
    return res
      .status(200)
      .json({ message: "inside created book successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in create user", e });
  }
};
