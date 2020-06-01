// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// Constraints:

// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10 ^ 5

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const hash = {};

  arr.forEach(num => (hash[num] = hash[num] + 1 || 1));

  let maxNum = -Infinity;
  let maxCount = -Infinity;

  for (let key in hash) {
    if (hash[key] > maxCount) {
      maxNum = key;
      maxCount = hash[key];
    }
  }
  return maxNum;
};

console.log(findSpecialInteger([6700, 8858, 8858, 8858, 8858]));
