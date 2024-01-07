let obj = [
  { name: "Priyanshu", sal: 5000 },
  { name: "Rahul", sal: 9000 },
  { name: "Pradeep", sal: 7000 },
  { name: "Ravi", sal: 8000 },
];

let max = -Infinity;
let sum = 0;
for (let i = 0; i < obj.length; i++) {
  let s = obj[i].sal;
  sum += s;
  if (s > max) {
    max = s;
  }
}
console.log("max : -", max);
console.log("sum : -", sum);
