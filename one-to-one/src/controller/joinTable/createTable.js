const { join_table } = require("../../config/db"); //master_user model

// master_user controller
// console.log(db)
module.exports = async (req, res) => {
  try {
    const data = await join_table.create(req.body);
    // const data = await join_table.findAll();
    return res
      .status(200)
      .json({ message: "inside created join successfull", data });
  } catch (e) {
    return res.status(400).json({ message: "error in join user", e });
  }
};
