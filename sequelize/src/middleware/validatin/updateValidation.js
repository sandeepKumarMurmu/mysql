// importing from library
const { validationResult } = require("express-validator");

const updateValidation = async (req, res, next) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: errors.errors[0].msg, data: [], status: false });
  }

  next();
};

// exporting validation
module.exports = updateValidation;
