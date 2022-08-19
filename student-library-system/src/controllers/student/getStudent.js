// importing year model
const Student = require("../../models/studentModel");

const { Op } = require("sequelize");

const streamModel = require("../../models/streamModel");
const yearModel = require("../../models/yearModel");

//create  Student controller
const getStudent = async (req, res) => {
  try {
    const studentData = await Student.findAll();

    return res
      .status(200)
      .json({ message: "student recieved", data: studentData, status: true });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside  student conrtoller",
      data: null,
      status: false,
    });
  }
};
const getStudentByName = async (req, res) => {
  let mainFilter = {};
  let modelFilter = {};
  let { name, stream, year, orderbyname, orderbyyear } = req.query;

  let byYear =
    orderbyyear !== undefined &&
    (orderbyyear.trim().toUpperCase() === "ASC" ||
      orderbyyear.trim().toUpperCase() === "DESC")
      ? orderbyyear.trim().toUpperCase()
      : "ASC";

  if (name !== undefined && name.trim().length)
    mainFilter.studentFullName = { [Op.substring]: name.trim() };

  if (stream !== undefined && stream.trim().length)
    modelFilter.streamName = { [Op.substring]: stream.trim() };
  if (year !== undefined && year.trim().length)
    mainFilter.yearId = +year.trim();
  try {
    const studentData = await Student.findAndCountAll({
      include: [
        { model: yearModel },
        { model: streamModel, where: modelFilter },
      ],
      where: mainFilter,
      order: [["yearID", byYear]],
    });

    return res.status(200).json({
      message: studentData.count
        ? "student recieved successfull"
        : "no student found",
      data: studentData,
      status: true,
    });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside  student conrtoller",
      data: null,
      status: false,
      e,
    });
  }
};

module.exports = { getStudent, getStudentByName };
