// 283. Move Zeroes
// Easy

// 3044

// 102

// Add to List

// Share
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const payload = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      payload.push(...nums.splice(i, 1));
      i--;
    }
  }

  for (const zero of payload) {
    nums.push(zero);
  }

  console.log(payload);
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

var moveZeroes2 = function(nums) {
  // start a pointer at beginning and end of arr

  let i = 0;
  let countOfZeroes = 0;

  while (i < nums.length - countOfZeroes) {
    debugger;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      countOfZeroes++;
    } else {
      i++;
    }
  }

  // loop over nums
  return nums;

  // if zero is encountered, take it out and put it at the end of the array
};

console.log(moveZeroes2([0, 1, 0, 3, 12]));
