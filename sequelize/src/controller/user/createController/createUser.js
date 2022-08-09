// importing user from
const { User } = require("../../../model/userModel/UserModel");

// create user function
const CreateUser = async (req, res) => {
  const { firstName, middleName, lastName, gender, dob, email, password } =
    req.body;

  try {
    const user = await User.create({
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth: dob,
      email,
      password,
      token: "",
    });
    return res
      .status(200)
      .json({ message: "user created", data: user, status: true });
  } catch (e) {
    return res.status(400).json({
      data: "",
      error: e,
      hint: "error in createController",
      status: false,
    });
  }
};

module.exports = CreateUser;
