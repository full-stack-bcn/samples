const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { SERVER_PORT } = require("./config");

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/forums", require("./forums"));

app.listen(SERVER_PORT, () => {
  console.log(`Forum API server listening on :${SERVER_PORT}`);
});
