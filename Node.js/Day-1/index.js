console.log("Hello from Node js");

let count = 0;
setInterval(() => {
  console.log(count++);
}, 1000);

setInterval(() => {
  console.log("Hello SetInterval");
}, 600);
