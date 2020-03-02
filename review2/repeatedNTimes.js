// 961. N-Repeated Element in Size 2N Array
// Easy

// 344

// 201

// Add to List

// Share
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

var repeatedNTimes = function(A) {
  // type check A, return early
  if (!Array.isArray(A)) return 'please supply a valid array';

  // check A.length
  if (A.length <= 1) {
    return null;
  }
  // get N by dividing Array length / 2

  let n = Math.floor(A.length / 2);

  // create dictionary

  const freqCounter = {};

  // loop over A with frequency counter

  for (const num of A) {
    freqCounter[num] = freqCounter[num] + 1 || 1;
  }

  // return the object entry that equals N

  for (const key in freqCounter) {
    if (freqCounter[key] === n) {
      return Number(key);
    }
  }
};

console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
