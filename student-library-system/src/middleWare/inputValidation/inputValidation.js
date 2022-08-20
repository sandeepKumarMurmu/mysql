const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
  try {
    console.log(validationResult(req));
    const { errors } = validationResult(req);

    let err = errors.map((ele) => ele.msg);

    return res.status(200).json({ data: err });
  } catch (e) {
    return res.status(400).json({
      message: "error in input validation",
      data: [],
      status: false,
      e,
    });
  }
};
