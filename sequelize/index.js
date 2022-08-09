// importing from library
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing connection
const connection = require("./src/config/Connection");

// importing endpoints
// const EndPoints=require("./src/routes/userRoute")
const PostEndPoints = require("./src/routes/postendpoints/user");
const UpdateEndPoints = require("./src/routes/updateendpoints/user");
const DeleteEndPoints = require("./src/routes/deleteendpoints/user");
const GetEndPoints = require("./src/routes/getendpoints/user");

// initializing app
const app = express();

app.use(express.json());
app.use(cors());

// routes
// users api end points
app.use("/api/v1", PostEndPoints);
app.use("/api/v1", UpdateEndPoints);
app.use("/api/v1", DeleteEndPoints);
app.use("/api/v1", GetEndPoints);

// delcalring port
const port = process.env.PORT || 8080;

// listing app
app.listen(port, async () => {
  try {
    await connection.authenticate();

    console.log(`listing on port ${port} .... `);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
