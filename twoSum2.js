// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Inputs         ||        Outputs
// --------------------------------
// [3,5,9,11], 20            [3,4]
var twoSum = function(numbers, target) {
  // type check inputs
  if (!Array.isArray) return 'please supply a valid array';
  if (typeof target !== 'number') return 'please supply a valid number';
  // write a for loop iterating over numbers array

  for (let i = 0; i < numbers.length; i++) {
    // write a nested for loop iterating over sub-items
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        // if i + j values match, return i +j
        return [i + 1, j + 1];
      }
    }
  }

  return null;
};

console.log(twoSum([3, 5, 9, 11], 20));
