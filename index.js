const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const apiRouter = require("./routes/apiRouter");

const { initMongooseDB } = require("./database/index");

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());
app.use(apiRouter);

app.listen(process.env.PORT || 8080, async () => {
  await initMongooseDB();
  console.log("app listening on port 8080");
});
