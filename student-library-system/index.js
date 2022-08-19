// importing from library
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing connections
const { connection } = require("./src/config/index");

// importing routes
const Routes = require("./src/routes/index");

// initializing application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Routes(app);

// declaring port
const PORT = process.env.PORT;

// listining on port
app.listen(PORT, async () => {
  try {
    await connection.authenticate();
    console.log(`connecting on Port ${PORT} ----------------`);
  } catch (e) {
    console.log({ e });
  }
});
