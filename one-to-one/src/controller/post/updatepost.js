const { user_post, master_user } = require("../../config/db"); //user_post and master_user models

// constroller for updating user_post
module.exports = async (req, res) => {
  try {
    const data = await user_post.update(
      { post_title: "update_title" },
      {
        include: [{ model: master_user }],
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
