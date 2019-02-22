'use strict';

const array = [3, 7, 1, 9, 2, 4, 6, 5, 8];

for (let j = 0; j < array.length - 1; j++) {
  let flag = false;
  for (let i = 0; i < array.length - j; i++) {
    if (array[i] > array[i + 1]) {
      const tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
      flag = true;
    }
  }
  if (!flag) {
    break;
  }
  console.log(array);
}

console.log(array);
