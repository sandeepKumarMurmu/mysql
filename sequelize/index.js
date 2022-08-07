const express = require("express");
const connection = require("./src/config/Connection");
const userController=require("./src/controller/usercontroller")


const app = express();
app.use(express.json());

app.use("",userController)

app.listen(2345, async () => {
  try {
    await connection.authenticate();

    console.log("connected on port 2345....");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
