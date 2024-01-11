const http = require("http");
const fs = require("fs");

const PORT = 7000;
const hostName = "127.0.0.8";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method, url);
  if (method === "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./Public/index.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/style") {
      let data = fs.readFileSync("./Public/style.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/login") {
      let data = fs.readFileSync("./Public/login.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/loginStyle") {
      let data = fs.readFileSync("./Public/login.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
  }
  if (method == "POST") {
    if (url == "/newuser") {
      req.on("data", (data) => {
        console.log(data.toString());
        let newUser = JSON.parse(data.toString());
        let users = fs.readFileSync("./users.json", "utf-8")
          ? JSON.parse(fs.readFileSync("./users.json", "utf-8"))
          : [];
        users.push(newUser);
        // console.log(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(users));
        res.write(JSON.stringify({ msg: "Data Stored in Database" }));
        res.end();
      });
    }
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
