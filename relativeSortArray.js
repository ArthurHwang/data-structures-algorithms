// Share
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Constraints:

// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.
//   Accepted

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const payload = [];

  let i = 0;
  let j = 0;

  while (i < arr2.length) {
    debugger;
    if (arr2[i] === arr1[j]) {
      payload.push(...arr1.splice(j, 1));
    } else if (j >= arr1.length) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }

  return [...payload, ...arr1.sort((a, b) => a - b)];
};

console.log(
  relativeSortArray(
    [2, 2, 2, 1, 3, 2, 4, 6, 7, 9, 2, 2, 2, 19],
    [2, 1, 4, 3, 9, 6]
  )
);
