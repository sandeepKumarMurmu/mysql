const connection = require("../../config/index");

module.exports = (req, res) => {
  let id = req.params.id;

  const DELETE = `DELETE FROM student WHERE SN='${id}'`;
  connection.query(DELETE, (err, result) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "error in delete", data: err, status: false });
    }
    return res
      .status(200)
      .json({ data: "", message: "student deleted", status: true });
  });
};
