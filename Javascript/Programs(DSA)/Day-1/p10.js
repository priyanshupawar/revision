//10)Print prime number in a given range

let num = Number(prompt("Enter any number range to check prime "));
for (let i = 1; i <= num; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(i, "is prime number");
  } else {
    console.log(i, "is not prime number");
  }
}
