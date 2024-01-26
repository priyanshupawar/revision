const express = require("express");
const { insertData } = require("./db.js");

const PORT = 2000;
const hostName = "127.0.0.2";

const app = express();
insertData();
app.listen(PORT, hostName, () => {
  console.log(`server running in http://${hostName}:${PORT}`);
});
