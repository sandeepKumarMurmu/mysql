const { master_user, user_post, book } = require("../../config/db"); //master_user and user_pot model

module.exports = async (req, res) => {
  try {
    const data = await master_user.findAll();
    return res
      .status(200)
      .json({ message: "inside get user successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in get user", e });
  }
};
