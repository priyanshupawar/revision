const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);

  if (request.method == "GET") {
    if (request.url == "/") {
      response.write("Hello from backend server Namaskaram ");
      response.end();
    }
  }
});
server.listen(4000);
