const { performance } = require("perf_hooks");

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the second array has it's corresponding value squared in the second array.
// The frequency of values must be the same

// o(n^2) solution
function sameON2(array1, array2) {
  if (!array1 || !array2) return undefined;
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }
  return true;
}

// o(n) solution
function sameON(array1, array2) {
  if (!array1 || !array2) return undefined;
  if (array1.length !== array2.length) return false;

  const arrayObj1 = {};
  const arrayObj2 = {};

  for (let val of array1) {
    arrayObj1[val] = (arrayObj1[val] || 0) + 1;
  }

  for (let val of array2) {
    arrayObj2[val] = (arrayObj2[val] || 0) + 1;
  }

  console.log(arrayObj1);
  console.log(arrayObj2);

  for (let key in arrayObj1) {
    if (!(key ** 2 in arrayObj2)) {
      return false;
    }
    if (arrayObj1[key ** 2] !== arrayObj2[key]) {
      return false;
    }
  }
  return true;
}

// performance
let t1 = performance.now();
sameON2([1, 2, 3], [1, 4, 9]);
let t2 = performance.now();
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`);

let t3 = performance.now();
sameON([1, 2, 2, 3], [1, 4, 4, 9]);
let t4 = performance.now();
console.log(`elapsed time: ${(t4 - t3) / 1000} seconds`);

module.exports = { sameON, sameON2 };
