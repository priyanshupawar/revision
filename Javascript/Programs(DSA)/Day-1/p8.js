//8)Sum of even digits and sum of odd digits



  let num = 8198;
  let even = 0,
    odd = 0;
  while (num > 0) {
    let res = num % 10;
    num = Math.trunc(num / 10);
    if (res % 2 == 0) {
      even += res;
    } else {
      odd += res;
    }
  }

  console.log("even:-", even);
  console.log("odd:-", odd);