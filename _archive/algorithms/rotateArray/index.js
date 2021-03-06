// Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non - negative.

//   Example 1:

// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation:
// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in -place with O(1) extra space ?

// var rotate = function (nums, k) {
//   if (k === 0) return

//   // let grabbedIndexes = k > 1 ? k + 1 : k

//   if (k > nums.length) {
//     nums.reverse()
//   } else {
//     const snapShot = nums.slice(0, k + 1)
//     nums.splice(0, k + 1)
//     for (let i = 0; i < snapShot.length; i++) {
//       nums.push(snapShot[i])
//     }
//   }
// }

// // rotate([1, 2, 3, 4, 5, 6, 7], 3)

// rotate([1, 2, 3, 4, 5], 6)

// var rotate = function (nums, k) {

//   if (k === 0) return

//   for (let i = 0; i < nums.length; i++) {

//   }

var rotate = function (nums, k) {
  let spliced = nums.splice(nums.length - k)
  nums.unshift(...spliced)
}

// rotate([1, 2, 3, 4, 5, 6, 7], 3)

rotate([1, 2, 3, 4, 5], 6)
