const { post, user } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    const data = await post.findAll({
      include: [{ model: user, attributes: ["name", "email"] }],
      where: { id: 2 },
      attributes: ["title"],
    });
    return res
      .status(200)
      .json({ message: "inside get  post successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in get post", e });
  }
};
