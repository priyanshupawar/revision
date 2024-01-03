//Write a pro
//substring

// let s = "malayalam";
let s = "racecar";
let maxPalindrom = "";
let minPalindrom = "abcdefghijklmnop"
for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    // let str = s.substring(i, j + 1);
    // if (isPalindrom(str)) {
    //   console.log(str + " : is palindrome");
    // }
    let bag = "";
    for (let k = i; k <= j; k++) {
      bag += s[k];
    }
    
    if (isPalindrom(bag)) {
    
      if (maxPalindrom.length < bag.length) {
        maxPalindrom = bag;
      }else if (minPalindrom.length > bag.length) {
        minPalindrom = bag;
      }
    }
  }
 
}
console.log(maxPalindrom,minPalindrom);

function isPalindrom(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}
