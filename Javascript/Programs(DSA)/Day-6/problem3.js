//substring

let s = "malayalam";
// let s = "racecar";

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
      console.log(bag + " : is palindrome");
    }
  }
}

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
