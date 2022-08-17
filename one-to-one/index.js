const express = require("express");
require("dotenv").config();
const cors = require("cors");

const Routes = require("./src/routes/index");

const db = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

Routes(app);

app.use((req, res, next) => {
  res.status(404);
  res.send(`<h1>
  no route matching</h1>`);
});

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`listing on port ${port} ----------------------`);
  } catch (e) {
    console.log("error in ----- ", e);
  }
});
