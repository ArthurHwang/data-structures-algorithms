// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
module.exports.minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  const min = findMin(arr);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let difference = Math.abs(arr[i] - arr[i + 1]);
    if (difference === min) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};

function findMin(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i + 1]));
  }
  return min;
}
