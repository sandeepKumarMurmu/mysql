const UserRoute = require("./userRoute");

module.exports = (app) => {
  app.use("/", UserRoute);
};
