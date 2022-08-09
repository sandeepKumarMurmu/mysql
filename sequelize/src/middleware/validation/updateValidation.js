// importing from library
const { validationResult } = require("express-validator");

const updateValidation = async (req, res, next) => {
  let { errors } = validationResult(req);

  let newerr = [];

  for (var i = 0; i < errors.length; i++) {
    if (req.body[errors[i].param]) {
      newerr.push(errors[i]);
    }
  }

  if (newerr.length > 0) {
    return res
      .status(400)
      .json({ message: newerr[0].msg, data: [], status: false });
  }

  next();
};

// exporting validation
module.exports = updateValidation;
