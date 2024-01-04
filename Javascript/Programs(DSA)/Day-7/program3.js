//Write a program to find max repetd char in a string
// let s1 = "I am feeling very energetic and confident";

let max = 0;
let s1 = "malayalam";
let ch = [...s1];
let result = "";
for (let i = 0; i < ch.length; i++) {
  let count = 1;
  for (let j = i + 1; j < ch.length; j++) {
    if (ch[i] == ch[j]) {
      count++;
      ch[j] = " ";
    }
  }
  if (count > max && ch[i] != " ") {
    max = count;
    result = ch[i];
  }
}
console.log(result + " = " + max);

// let s1 = "malayalam";

// let ch = [...s1];
// let result = "";
// for (let i = 0; i < ch.length; i++) {
//   for (let j = i + 1; j < ch.length; j++) {
//     if (ch[i] == ch[j]) {
//       ch[j] = " ";
//     }
//   }
//   if(ch[i]!=" "){
//     result += ch[i];
//   }

// }
// console.log(result);
