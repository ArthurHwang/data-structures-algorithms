// 349. Intersection of Two Arrays
// Easy

// 637

// 1049

// Add to List

// Share
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let sortedNums1 = nums1.sort((a, b) => a - b);
  let sortedNums2 = nums2.sort((a, b) => a - b);
  let result = [];
  let i = 0;
  let j = 0;

  while (i < sortedNums1.length && j < sortedNums2.length) {
    if (sortedNums1[i] === sortedNums2[j]) {
      if (!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
      i++;
      j++;
    } else if (sortedNums1[i] < sortedNums2[j]) i++;
    else j++;
  }
  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
