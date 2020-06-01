// 977. Squares of a Sorted Array
// Easy

// 772

// 71

// Add to List

// Share
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non - decreasing order.
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(num => num * num).sort((a, b) => a - b);
};
var sortedSquares2 = function(A) {
  const retArray = [];
  let i = 0;
  let j = A.length - 1;

  while (i <= j) {
    const left = Math.pow(A[i], 2);
    const right = Math.pow(A[j], 2);

    if (left >= right) {
      retArray.unshift(left);
      i++;
    } else {
      retArray.unshift(right);
      j--;
    }
  }

  return retArray;
};

console.log(sortedSquares([-4, -1, 0, -3, 10]));
console.log(sortedSquares2([-4, -1, 0, -3, 10]));
