// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
// optimized
module.exports.replaceElements = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  if (!arr.length) return [];

  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let newArr = arr.slice(i);
    let max = Math.max(...newArr);
    let current = arr[i];
    if (current <= max) result.push(max);
  }
  result.push(-1);
  return result;
};

module.exports.replaceElements2 = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  if (!arr.length) return [];

  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(arr[j], max);
      found = true;
    }
    if (found) arr[i] = max;
  }

  arr[arr.length - 1] = -1;
  return arr;
};
