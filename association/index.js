const express = require("express");

// importing connection
const db = require("./src/config/db");

// route handelers
// const userRoute = require("./src/routes/userRoute");
// const contactRoute = require("./src/routes/contactRoute");
// const bookRoute = require("./src/routes/bookRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", userRoute);
// app.use("/", contactRoute);
// app.use("/", bookRoute);

app.listen(8080, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("listning on port 8080 -----------------------");
  } catch (e) {
    console.log(e);
  }
});
