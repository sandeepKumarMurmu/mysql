const connection = require("../../config/index");

module.exports = (req, res) => {
  const GET = `SELECT * FROM student`;
  connection.query(GET, (err, result) => {
    if (err) {
      return res
        .status(400)
        .json({ data: "", message: "student get", status: false });
    }
    return res
      .status(200)
      .json({ data: result, message: "student data recieved", status: true });
  });
};
