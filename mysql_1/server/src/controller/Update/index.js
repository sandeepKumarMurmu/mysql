const connection = require("../../config/index");

module.exports = (req, res) => {
  let id = req.params.id;
  const { fullName, gender, dateOfBirth, address } = req.body;

  const CREATE = `UPDATE student SET fullName='${fullName}',gender='${gender}',dob='${dateOfBirth}',address='${address}' WHERE SN='${id}')`;
  connection.query(CREATE, (err, result) => {
    if (err) {
      return res
        .status(400)
        .json({ data: err, message: "error in updated", status: false });
    }
    return res
      .status(200)
      .json({ data: "", message: "student updated", status: true });
  });
};
