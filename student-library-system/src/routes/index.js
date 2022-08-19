//importing route files
const yearRoute = require("./yearRoute");

const baseRoute = "api/v1/student-library-system/";

// main route function
module.exports = (app) => {
  app.use(baseRoute, yearRoute);
};
