//11)Write a program to find the length of given number
let num = 8198;
let count = 0;
while (num > 0) {
  num = Math.trunc(num / 10);
  count++;
}
console.log(count);

// let num = 8198;
// console.log(typeof(num))
// num = num.toString();
// console.log(num)
// num = num.split("");
// console.log(num)
// console.log(num.length);
