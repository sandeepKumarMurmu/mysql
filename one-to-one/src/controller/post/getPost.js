const { user_post, master_user } = require("../../config/db");

// exporting find all controller for post
module.exports = async (req, res) => {
  try {
    const data = await user_post.findAll({
      include:master_user,
      // where:{post_id:1}
    });
    return res
      .status(200)
      .json({ message: "inside get  user_post successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in get user_post", e });
  }
};
