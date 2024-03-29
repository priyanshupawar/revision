const express = require("express");
const { join } = require("path");

const app = express();

const PORT = 7000;
const hostName = "127.0.0.7";

app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("Home", { name: "Priyanshu", address: "Indore" });
});

app.get("/about", (req, res) => {
  res.render("About.ejs", { data: ["apple", "banana", "grapes", "kiwi"] });
});

app.listen(PORT, hostName, () => {
  console.log(`Server Started in http://${hostName}:${PORT}`);
});
