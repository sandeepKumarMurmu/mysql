// library methode
const { Op } = require("sequelize");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// models
const Student = require("../../models/studentModel");
const streamModel = require("../../models/streamModel");
const yearModel = require("../../models/yearModel");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter functions
const fildFilter = require("../..//utils/functions/mainFilter");
const orderFilter = require("../../utils/functions/orderFilter");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//get Student by id controller

const getStudentById = async (req, res) => {
  try {
    const studentData = await Student.findByPk(+req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//get Student by queries controller
const getStudentBySearch = async (req, res) => {
  const { name, stream, order, orderByName } = req.query;
  console.log(orderFilter(order, "yearId"));
  try {
    const studentData = await Student.findAndCountAll({
      include: [
        { model: yearModel, attributes: ["yearName"] },
        {
          model: streamModel,
          where: { ...fildFilter(stream, "streamName", Op.substring) },
          attributes: ["streamName", "streamCode"],
        },
      ],
      where: { ...fildFilter(name, "studentFullName", Op.substring) },
      attributes: { exclude: ["updatedAt", "createdAt"] },
      order: [
        ...orderFilter(order, "yearId"),
        ...orderFilter(orderByName, "studentFullName"),
      ],
    });

    return res.status(200).json({
      message: "student found",
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

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//exporting controllers
module.exports = { getStudentById, getStudentBySearch };
