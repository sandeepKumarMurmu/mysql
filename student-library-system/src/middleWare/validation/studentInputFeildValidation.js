module.exports = (body) => {
  return {
    // ------------------------------------------------------------------------------------------------------------
    // name Validator
    nameValidation: body("fullName")
      .isLength({ max: 30, min: 4 })
      .withMessage("full name must be between 3 to 30 characters")
      .isLowercase()
      .withMessage("please give input in lower case"),
    // ------------------------------------------------------------------------------------------------------------
    // email Validator
    emailValidation: body("email").isEmail().withMessage("invalid email id"),
    // ------------------------------------------------------------------------------------------------------------
    // address Validator
    addressValidation: body("address").isLength({ max: 30 }),
    // ------------------------------------------------------------------------------------------------------------
    // stream Validator
    streamValidation: body("stram")
      .isNumeric()
      .withMessage("invalid stream selection"),
    // ------------------------------------------------------------------------------------------------------------
    // year Validator
    yearValidation: body("year")
      .isNumeric()
      .withMessage("invalid year selection"),
  };
};
