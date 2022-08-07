const express = require("express");
const cors = require("cors");
const conn = require("./src/config");
const routes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/student",routes)

const port = process.env.PORT || 8080;
app.listen(port, () => {
  conn.connect((err) => {
    if (err) {
      console.log("err connecting " + err.stack);
    } else {
      console.log(`listning on port ${port}....`);
    }
  });
});
