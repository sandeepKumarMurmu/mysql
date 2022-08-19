// importing year model
const Year = require("../../models/yearModel");

//create  year controller
const getYear = async (req, res) => {
  const { year } = req.body;
  try {
    const yearData = await Year.findAll();

    return res
      .status(200)
      .json({ message: "year recived", data: yearData, status: true });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside get year conrtoller",
      data: null,
      status: false,
    });
  }
};

module.exports = { getYear };
