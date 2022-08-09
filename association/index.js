const express = require("express");
const db = require("./src/config/db");
const userRoute = require("./src/routes/userRoute");
const contactRoute = require("./src/routes/contactRoute");

// console.log(db.userx);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);
app.use("/", contactRoute);

app.listen(8080, async () => {
  try {
    await db.sequelize.authenticate();
    console.log("listning on port 8080 -----------------------");
  } catch (e) {
    console.log(e);
  }
});
