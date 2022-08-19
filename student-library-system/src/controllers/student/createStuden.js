// importing year model
const Student = require("../../models/studentModel");

//create  Student controller
const createStudent = async (req, res) => {
  const { fullName, eamil, type, address, stream, year } = req.body;
  try {
    const studentData = await Student.create({
      studentFullName: fullName,
      studentEmail: eamil,
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
    });
  }
};

module.exports = { createStudent };
