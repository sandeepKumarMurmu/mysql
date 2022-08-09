// importing User model
const { User } = require("../../../model/userModel/UserModel");
const { Op } = require("sequelize");
// create user function
const getByName = async (req, res) => {
  // return res.send("connected");
  const list = req.query.name.trim().split(" ");

  let FirstName = list[0]||"";
  let LastName = list[list.length-1]||"";
  

  try {
    const data = await User.findAll({
      where: {
        [Op.or]: [{ firstName: `${FirstName}` }, { lastName: `${LastName}` }],
      },
    });
    return res
      .status(200)
      .json({ message: "getting data", data, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in find one by name",
      status: false,
    });
  }
};

module.exports = getByName;
