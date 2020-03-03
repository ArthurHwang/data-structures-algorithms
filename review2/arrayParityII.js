// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Note:

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  // typecheck A
  if (!Array.isArray(A)) return 'please supply a valid array';
  // create evens and odds variables, call filter on A to filter out odds and evens
  const evens = A.filter(num => num % 2 === 0);
  const odds = A.filter(num => num % 2 !== 0);

  const payload = [];
  // loop over A,

  A.forEach((num, idx) => {
    if (idx % 2 === 0) {
      // if i is even splice evens, push to payload array
      payload.push(...evens.splice(0, 1));
    } else {
      // else splice odds, push to payload array
      payload.push(...odds.splice(0, 1));
    }
  });

  // return payload
  return payload;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));

var sortArrayByParityIII = function(A) {
  // typecheck A
  if (!Array.isArray(A)) return 'please supply a valid array';
  // create evens and odds variables, call filter on A to filter out odds and evens
  const dictionary = {
    evens: [],
    odds: []
  };
  const payload = [];

  for (let num of A) {
    if (num % 2 === 0) {
      dictionary['evens'].push(num);
    } else {
      dictionary['odds'].push(num);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      payload.push(...dictionary.evens.splice(0, 1));
    } else {
      payload.push(...dictionary.odds.splice(0, 1));
    }
  }
  return payload;
};

console.log(sortArrayByParityIII([4, 2, 5, 7]));

var sortArrayByParityIV = function(A) {


  const payload = []

  let evenIdx = 0
  let oddIdx = 1

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      payload[evenIdx] = A[i]
      evenIdx += 2
    } else {
      payload[oddIdx] = A[i]
      oddIdx += 2
    }
  }

  return payload
};

console.log(sortArrayByParityIV([4, 2, 5, 7]));
