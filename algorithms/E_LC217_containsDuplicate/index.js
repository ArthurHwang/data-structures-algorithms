// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

module.exports.containsDuplicate = (nums) => {
  if (!nums.length) return false;
  if (!Array.isArray(nums)) return undefined;

  const numSet = new Set(nums);
  return nums.length !== numSet.size;
};

module.exports.containsDuplicate = (nums) => {
  if (!nums.length) return false;
  if (!Array.isArray(nums)) return undefined;

  const hashMap = {};

  for (const num of nums) {
    if (num in hashMap) {
      return true;
    }
    hashMap[num] = true;
  }

  return false;
};
