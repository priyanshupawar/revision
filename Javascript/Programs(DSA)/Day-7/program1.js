//Write a program to remove duplicate charater from string

let s = "banana";
let obj = {};

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  if (obj[char] === undefined) {
    obj[char] = 1;
  } else {
    obj[char]++;
  }
}

// console.log(obj);

let res = "";
for (char in obj) {
  res += char;
}
// console.log(res);

let s2 = "racecar";
// let s3= s2.split("")
let s3 = [...s2];
// console.log(s3);

//Second method without object

let s1 = "malayalam";

let ch = [...s1];
let result = "";
for (let i = 0; i < ch.length; i++) {
  for (let j = i + 1; j < ch.length; j++) {
    if (ch[i] == ch[j]) {
      ch[j] = " ";
    }
  }
  if(ch[i]!=" "){
    result += ch[i];
  }
  
}
console.log(result);
