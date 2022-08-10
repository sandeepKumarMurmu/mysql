const { post } = require("../../config/db");

module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const data = await post.create(req.body);
    return res
      .status(200)
      .json({ message: "inside created post successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in create post", e });
  }
};
