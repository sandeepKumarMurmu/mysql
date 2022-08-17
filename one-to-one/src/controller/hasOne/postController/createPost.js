const { user_post } = require("../../../config/db"); //user_post model

// controller to create user_post controller
module.exports = async (req, res) => {
  try {
    const data = await user_post.create(req.body);
    return res
      .status(200)
      .json({ message: "inside created post successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in create post", e });
  }
};
