module.exports = (body) => {
  return {
    nameValidation: body("fullName")
      .isLength({ max: 30, min: 4 })
      .withMessage("full name must be between 3 to 30 characters")
      .isLowercase()
      .withMessage("please give input in lower case"),
    emailValidation: body("email").isEmail().withMessage("invalid email id"),
    addressValidation: body("address").isLength({ max: 30 }),
    streamValidation: body("stram")
      .isNumeric()
      .withMessage("invalid stream selection"),
    yearValidation: body("year")
      .isNumeric()
      .withMessage("invalid year selection"),
  };
};
