const { post, user } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    const data = await post.update(
      { title: "update_title" },
      {
        include: [{ model: user }],
        where: { id: 2 },
      }
    );
    return res
      .status(200)
      .json({ message: "inside created post successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in create post", e });
  }
};
