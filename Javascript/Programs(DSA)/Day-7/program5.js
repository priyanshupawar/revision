// Find voviles in given string

// let s1 = "racecar";
// let ch = [...s1];
// let count = 0;
// for (let i = 0; i < ch.length; i++) {
//   if (
//     ch[i] == "a" ||
//     ch[i] == "e" ||
//     ch[i] == "i" ||
//     ch[i] == "o" ||
//     ch[i] == "u"
//   ) {
//     count++;
//   }
// }

// if(count>0){
//     console.log(count);
// }else{
//     console.log("It is consonent");
// }

let s1 = "dhruva@123";
let ch = [...s1];
let wovel = 0;
let consonent = 0;
for (let i = 0; i < ch.length; i++) {
  if (
    ch[i] == "a" ||
    ch[i] == "e" ||
    ch[i] == "i" ||
    ch[i] == "o" ||
    ch[i] == "u"
  ) {
    wovel++;
  } else {
    consonent++;
  }
}

console.log("wovel = " + wovel);
console.log("consonent = " + consonent);
