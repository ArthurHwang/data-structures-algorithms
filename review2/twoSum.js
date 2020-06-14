// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// O(N)^2
const twoSum = (nums, target) => {
  if (!Array.isArray(nums)) return 'please supply a valid array';

  if (typeof target !== 'number') return 'please supply a valid number';

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

// Two pass O(N)
const twoSum2 = (nums = [2, 7, 11, 15], target = 9) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
};

console.log(twoSum2([3, 3], 6));

// with Map
const twoSum3 = (nums = [2, 7, 11, 15], target = 9) => {
  const map = new Map();

  for (const i in nums) {
    let complement = target - nums[i];
    let index = +i;

    // console.log(complement);

    if (map.has(complement)) {
      return [map.get(complement), index];
    }

    map.set(nums[index], index);
  }
};

console.log(twoSum3());

const haha = new Map();

haha.set(5, 20);

console.log(haha.get(5));

console.log(haha);
