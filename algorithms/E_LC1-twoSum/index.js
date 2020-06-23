// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// optimized
module.exports.twoSum = (nums = [2, 7, 11, 15], target = 9) => {
  if (!Array.isArray(nums) || !nums.length || typeof target !== 'number')
    return undefined;

  const hashMap = {};

  for (const [idx, num] of nums.entries()) {
    const complement = target - num;
    if (complement in hashMap) {
      return [hashMap[complement], idx];
    }
    hashMap[num] = idx;
  }
  return [];
};

// unoptimized
const twoSum = (nums, target) => {
  if (!Array.isArray(nums) || typeof target !== 'number') return undefined;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
