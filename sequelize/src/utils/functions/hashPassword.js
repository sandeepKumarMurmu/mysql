// importing from library
const bcrypt = require("bcryptjs");
require("dotenv").config();

// enviroment variable
const salt = +process.env.SALT;

// hashing function
module.exports = (password) => {
    return bcrypt.hashSync(password, salt);
};
