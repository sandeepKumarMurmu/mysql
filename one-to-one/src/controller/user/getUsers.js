const { user, post } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    const data = await user.findAll({
      include: [{ model: post, attributes: ["title"] }],

      where: { id: 1 },
      attributes: ["name", ["email", "email_id"]],
    });
    return res
      .status(200)
      .json({ message: "inside get user successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in get user", e });
  }
};
