const { Sequelize } = require("sequelize");


module.exports = new Sequelize("allen_1", "root", "XYZ4648s@nDEEP", {
  host: "localhost",
  dialect: "mysql",
});
