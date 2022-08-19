// importing year model
const studentBookJunction = require("../../models/student_book_junction");

//create  Student controller
const createStudentBookJunction = async (req, res) => {
  try {
    const studentBookJunctionData = await studentBookJunction.create(req.body);

    return res.status(200).json({
      message: "studentBookJunction created",
      data: studentBookJunctionData,
      status: true,
    });
  } catch (e) {
    return res.status(400).json({
      message: "something wrong inside creat studentBookJunction conrtoller",
      data: null,
      status: false,
    });
  }
};

module.exports = { createStudentBookJunction };
