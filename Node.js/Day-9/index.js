//importing express
const express = require("express");

//app creation
const app = express();

//PORT , hostName
const PORT = 2000;
const hostName = "127.0.0.8";

//apis
//get
app.get("/", (req, res) => {
  res.send("<h1>Hello I'M the express server</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About page</h1>");
});
app.get("/login", (req, res) => {
  // Use path.join to get the absolute path to the login.html file
  const loginPath = path.join(__dirname, "../Public/HTML/login.html");

  // Send the login.html file as the response
  res.sendFile(loginPath);
});

//app listen

app.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
