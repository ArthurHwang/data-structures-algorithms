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

const getDegree = arr => {
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

// Time Complexity - O(n)
// Space Complexity - O(n)
const findShortestSubArray = nums => {
  if (!Array.isArray(nums)) return 'please supply a valid array';
  const { minIdx, maxIdx, maxDegree, degree } = getDegree(nums);
  if (maxDegree === 1) return 1;

  let minLength = Infinity;
  for (const [key, value] of Object.entries(degree)) {
    if (value === maxDegree) {
      minLength = Math.min(minLength, maxIdx[key] - minIdx[key] + 1);
    }
  }
  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

const getDegree2 = arr => {
  const map = {};
  for (const num of arr) {
    map[num] = map[num] + 1 || 1;
  }
  const mapArr = Object.entries(map);
  let max = -Infinity;

  for (let i = 0; i < mapArr.length; i++) {
    const isLarger = Math.max(mapArr[i][1], max) > max;
    if (isLarger) {
      max = Math.max(mapArr[i][1], max);
    }
  }
  return max;
};
// Brute Force NOT GOOD
// Time Complexity = O(n^2)
// Space Complexity = O(n)
const findShortestSubArray2 = nums => {
  if (!Array.isArray(nums)) return 'please supply a valid array';
  const degree = getDegree(nums);
  if (degree === 1) return 1;

  let minLength = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;

        if (count === degree) {
          minLength = Math.min(minLength, j - i + 1);
        }
      }
    }
  }
  return minLength;
};

console.log(findShortestSubArray2([1, 2, 2, 3, 1, 4, 2]));
