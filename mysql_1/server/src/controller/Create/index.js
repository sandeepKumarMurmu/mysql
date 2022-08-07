const connection = require("../../config/index");
const uniqueID = require("uniqid");

module.exports = (req, res) => {
  let { fullName, gender, dateOfBirth, address } = req.body;
  fullName=fullName.trim().toUpperCase();
  gender=gender.split("")[0].toUpperCase();
  address=address.trim().toUpperCase();
  const id = uniqueID();
  const CREATE = `INSERT INTO student VALUES('${fullName}','${gender}','${address}','${id}','${dateOfBirth}')`;

  connection.query(CREATE, (err, result) => {
    if (err) {
      return res.status(400).json({ message: "error in create", data:err, status:false });
    }
    return res
      .status(200)
      .json({ data: "", message: "student created", status: true });
  });
};
