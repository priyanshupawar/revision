//occurence in string or array

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

console.log(obj);
