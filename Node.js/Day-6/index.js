// const { log } = require("console");
const http = require("http");
const fs = require("fs");

const PORT = 2000;
const hostName = "127.0.0.4";

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);
  if (method === "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./public/html/index.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/style") {
      let data = fs.readFileSync("./public/CSS/index.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/contactstyle") {
      let data = fs.readFileSync("./public/CSS/contact.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/aboutstyle") {
      let data = fs.readFileSync("./public/CSS/about.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/loginstyle") {
      let data = fs.readFileSync("./public/CSS/login.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/signupstyle") {
      let data = fs.readFileSync("./public/CSS/signup.css", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/login") {
      let data = fs.readFileSync("./public/html/login.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/about") {
      let data = fs.readFileSync("./public/html/about.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/contact") {
      let data = fs.readFileSync("./public/html/contact.html", "utf-8");
      //   console.log(data)
      res.write(data);
      res.end();
    }
    if (url == "/signup") {
      let data = fs.readFileSync("./public/html/signup.html", "utf-8");
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
        console.log(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(users))
        res.write(JSON.stringify({msg:"Data Stored in Database"}))
        res.end()
      });
    }
  }
  //   else {
  //     res.write("<h1>Error 404 Page Not Found </h1>");
  //     res.end();
  //   }
});

server.listen(PORT, hostName, () => {
  console.log(`server listening at http://${hostName}:${PORT}`);
});
