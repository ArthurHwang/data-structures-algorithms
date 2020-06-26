// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// optimized
module.exports.maxSubArray = (nums) => {
  if (nums.length === 1 && nums[0] >= 0) {
    return nums[0];
  }
  if (nums.length === 1 && nums[0] < 0) {
    return 0;
  }
  if (!nums.length) return 0;
  if (!Array.isArray(nums)) return undefined;

  let currentMax = 0;

  return nums.reduce((acc, num) => {
    currentMax = Math.max(num, currentMax + num);
    return Math.max(acc, currentMax);
  }, nums[0]);
};

module.exports.maxSubArray2 = (nums) => {
  if (nums.length === 1 && nums[0] >= 0) {
    return nums[0];
  }
  if (nums.length === 1 && nums[0] < 0) {
    return 0;
  }
  if (!nums.length) return 0;
  if (!Array.isArray(nums)) return undefined;

  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let tempMax = 0;
    for (let j = i; j < nums.length; j++) {
      tempMax += nums[j];
      max = Math.max(max, tempMax);
    }
  }

  return max;
};
