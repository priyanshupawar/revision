//3)Write a program to find even number

let x = prompt("Enter any positive number");
let p = document.getElementById("para");
if (x === undefined || x === null) {
  alert("Enter number");
} else {
  if (x % 2 == 0) {
    p.innerText = "Number is even number";
  } else {
    p.innerText = "Number is odd number";
  }
}
