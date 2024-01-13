//7)Write a program to print sum of digits

// let num = 12345;
// num = num.toString();
//   num = +num;
// console.log(num);

let num = 8198;
let count = 0;
let result = 0;
while (num > 0) {
  rem = num % 10;
  num = Math.trunc(num / 10);
  result = result + rem;
  console.log(rem);
  count++;
}
console.log(result);
console.log(count);
