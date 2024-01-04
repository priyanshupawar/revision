//Write a program to find occurence of  char in a string

let s1 = "I am feeling very energetic and confident";
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
  if (ch[i] != " ") {
    // result += ch[i];
    console.log(ch[i] + " = " + count);
  }
}
