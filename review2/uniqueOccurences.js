// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // typecheck arr
  if (!Array.isArray(arr)) return 'please supply a valid array';
  if (arr.length === 1) return true;

  // create freqCounter dictionary
  const freqCounter = {};
  // loop over arr and count the frequencies

  for (let num of arr) {
    freqCounter[num] = freqCounter[num] + 1 || 1;
  }
  // create a new set data structure

  const unique = new Set();

  // loop over dictionary and add entries to set

  for (let key in freqCounter) {
    unique.add(freqCounter[key]);
  }
  // if set length not the same as Object.entries(dictionary) return false, else true

  return unique.size === Object.values(freqCounter).length ? true : false;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
