// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
//     nums[i] will be an integer between 0 and 49, 999.

// assumptions
// always non-negative numerical items in array

const getDegreeInfo = arr => {
  const degree = {};
  const maxIdx = {};
  const minIdx = {};
  let maxDegree = -Infinity;

  arr.forEach((num, idx) => {
    if (degree[num]) {
      degree[num] = degree[num] + 1;
      maxIdx[num] = idx;
    } else {
      degree[num] = 1;
      minIdx[num] = idx;
    }
    maxDegree = Math.max(maxDegree, degree[num]);
  });
  return {
    maxIdx,
    minIdx,
    maxDegree,
    degree
  };
};

var findShortestSubArray = function(nums) {
  if (!Array.isArray(nums)) return 'please supply a valid array';

  // create a helper function to return the degree, and min index / max index
  const { maxIdx, minIdx, degree, maxDegree } = getDegreeInfo(nums);
  console.log(degree);

  //   console.log(minIndex, maxIndex);
  // loop over nums, if the value is equal to the maxDegree return the length difference of max and min

  let minLength = Infinity;
  for (const [key, value] of Object.entries(degree)) {
    if (value === maxDegree) {
      minLength = Math.min(minLength, maxIdx[key] - minIdx[key] + 1);
    }
  }

  return minLength;
  //   for (const [value, index] of Object.values(nums)) {
  //   }
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));

var numberOfSteps = function(num) {
  //     crate counter variable

  let counter = 0;
  // write a while loop with condition true until num is zero

  while (num > 0) {
    console.log(num);
    if (num % 2 === 0) {
      num = num / 2;
      counter++;
    } else if (num % 2 !== 0) {
      num = num - 1;
      counter++;
    }
  }
  return counter;
  console.log(num);
};

console.log(numberOfSteps(123));

function countUniqueValues(nums) {
  let i = 0;
  let j = i + 1;
  let counter = 0;

  while (i < nums.length) {
    debugger;
    if (nums[i] !== nums[j]) {
      counter++;
      i++;
    } else {
      i = j;
      j++;
    }
  }

  return counter;
}

console.log(countUniqueValues([1, 1, 2]));
