// importing year model
const Year = require("../../models/yearModel");

//create  year controller
const createYear = async (req, res) => {
  const { year } = req.body;
  try {
    const yearData = await Year.create({ yearName: year });

    return res
      .status(200)
      .json({ message: "year created", data: yearData, status: true });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside creat year conrtoller",
      data: null,
      status: false,
    });
  }
};

module.exports = { createYear };
