//write a program Selection sort
let arr = [
  1, 2, 3, 7, 8, 2, 4, 8, 2, 4, 55, 95, 2, 0, 15, 63, 0, 5, 203, 5, 3, 22,
];

for (let i = 0; i < arr.length; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

console.log(arr);
let obj = {};
