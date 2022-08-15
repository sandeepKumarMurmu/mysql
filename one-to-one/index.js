const express = require("express");
require("dotenv").config();
const cors = require("cors");

// const userRoute = require("./src/routes/userRoute");
// const postRoute = require("./src/routes/postRout");
// const bookRoute = require("./src/routes/bookRoute");
// const joinTable = require("./src/routes/joinTable");

const Routes = require("./src/routes/index");

const db = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({ origin: "http://localhost:3000" }));

Routes(app);

app.use((req, res, next) => {
  console.log(res.errored);
  res.status(404);
  res.send("route not found");
});
// app.use("/", userRoute);
// app.use("/", postRoute);
// app.use("/", bookRoute);
// app.use("/", joinTable);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`listing on port ${port} ----------------------`);
  } catch (e) {
    console.log("error in ----- ", e);
  }
});
