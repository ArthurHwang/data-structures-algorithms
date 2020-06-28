// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
//         [4,3,2,1]

//      r  [1 , 1, 2, 6]
//      l  [1, 4, 12, 24]
//         [24,12,4,1]

//         [24, 24, 12, 4]

// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

module.exports.productExceptSelf = (nums) => {
  if (!nums.length) return [];
  if (!Array.isArray(nums)) return undefined;

  const right = [];
  const left = [];

  nums.reduce((acc, num) => {
    right.push(acc);
    return acc * num;
  }, 1);

  nums.reverse().reduce((acc, num) => {
    left.push(acc);
    return acc * num;
  }, 1);

  left.reverse();

  return right.map((val, idx) => val * left[idx]);
};
