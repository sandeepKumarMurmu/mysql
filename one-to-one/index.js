const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  return res.status(200).send("you are connected to backend");
});

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    console.log(`listing on port ${port} ----------------------`);
  } catch (e) {
    console.log("error in ----- ", e);
  }
});
