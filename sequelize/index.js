// importing from library
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing connection
const connection = require("./src/config/Connection");

// importing endpoints
const UserRouteHandler=require("./src/routes/userRoutes")

// initializing app
const app = express();

app.use(express.json());
app.use(cors());

// routes

UserRouteHandler(app)

// delcalring port
const port = process.env.PORT || 8080;

// listing app
app.listen(port, async () => {
  try {
    await connection.authenticate();

    console.log(`listing on port ${port} ........................................... `);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
