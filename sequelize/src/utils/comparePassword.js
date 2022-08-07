// importing from library
const bcrypt = require("bcryptjs");

// hashing function
module.exports = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
