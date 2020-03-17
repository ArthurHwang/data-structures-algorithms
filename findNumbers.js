// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5
// Accepted
// 47,905
// Submissions
// 56,727
var findNumbers = function(nums) {
  // typecheck nums array
  if (!Array.isArray(nums)) return 'please supply a valid array input';

  // create count variable, initialize to 0
  let count = 0;
  // loop over nums

  for (let num of nums) {
    // call toString on number
    const numTransform = num.toString();
    // check if length is even or odd
    if (numTransform.length % 2 === 0) {
      count++;
    }
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));

var findNumbers2 = function(nums) {
  // using reduce

  return nums.reduce(
    (acc, num) => (String(Math.floor(num)).length % 2 === 0 ? ++acc : acc),
    0
  );
};
console.log(findNumbers2([12, 345, 2, 6, 7896]));
