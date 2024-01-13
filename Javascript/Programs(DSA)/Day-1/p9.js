//9)Chek wethere given number is prime number or not

let count = 0;
let num = Number(prompt("Enter any number to check it is prime or not"));
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}
if (count === 2) {
  console.log(num, "is prime number");
} else {
  console.log(num, "is not prime number");
}
