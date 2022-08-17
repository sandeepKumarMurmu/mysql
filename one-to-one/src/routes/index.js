const UserRoute = require("./userRoute");

// hasOne
const UserRouteHasOne = require("./hasOneRoute/userRoute");
const UserPostRouteHasOne = require("./hasOneRoute/postRoute");

module.exports = (app) => {
  //  has one routes
  app.use("/", UserRouteHasOne);
  app.use("/", UserPostRouteHasOne);
};
