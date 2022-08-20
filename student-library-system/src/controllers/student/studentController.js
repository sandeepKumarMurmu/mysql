// library methode
const { Op } = require("sequelize");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// models
const Student = require("../../models/studentModel");
const streamModel = require("../../models/streamModel");
const yearModel = require("../../models/yearModel");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter functions
const fildFilter = require("../../utils/functions/mainFilter");
const orderFilter = require("../../utils/functions/orderFilter");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
//exporting controllers
module.exports = {
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Student by id controller
  getStudentById: async (req, res) => {
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
  },
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //get Student by queries controller
  getStudentBySearch: async (req, res) => {
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
  },

  // -------------------------------------------------------------------------------------------------------------------------------------------------------------
  //create Student by queries controller
  createStudent: async (req, res) => {
    const { fullName, email, type, address, stream, year } = req.body;
    try {
      const studentData = await Student.create({
        studentFullName: fullName,
        studentEmail: email,
        studentType: type,
        studentAddress: address,
        streamId: stream,
        yearId: year,
      });

      return res
        .status(200)
        .json({ message: "student created", data: studentData, status: true });
    } catch (e) {
      return res.status(400).json({
        message: "something wrong inside creat student conrtoller",
        data: null,
        status: false,
        e,
      });
    }
  },
};