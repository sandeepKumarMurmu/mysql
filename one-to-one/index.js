const express = require("express");
require("dotenv").config();

const userRoute = require("./src/routes/userRoute");
const postRoute = require("./src/routes/postRout");
const bookRoute = require("./src/routes/bookRoute");

const db = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", userRoute);
app.use("/", postRoute);
app.use("/", bookRoute);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`listing on port ${port} ----------------------`);
  } catch (e) {
    console.log("error in ----- ", e);
  }
});
