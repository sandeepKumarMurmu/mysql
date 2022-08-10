const { user } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    const data = await user.create(req.body);
    return res
      .status(200)
      .json({ message: "inside created user successfull", data  });
  } catch (e) {
    return res.status(400).json({ message: "error in create user", e });
  }
};
