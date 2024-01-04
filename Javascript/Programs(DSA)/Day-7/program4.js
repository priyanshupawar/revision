//Write a program is to remove duplicate word from sentence

let s1 = "Madam is very beautiful Madam speakes malayam";
s1 = s1.toLocaleLowerCase();
let ch = s1.split(" ");
// console.log(ch)
// let max = 0;
let result = "";
for (let i = 0; i < ch.length; i++) {
  for (let j = i + 1; j < ch.length; j++) {
    if (ch[i] == ch[j]) {
      ch[j] = " ";
    }
  }
  if (ch[i] != " ") {
    console.log(ch[i]);
  }
}
