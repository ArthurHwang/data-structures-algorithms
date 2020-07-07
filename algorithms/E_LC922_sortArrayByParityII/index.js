// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

module.exports.sortArrayByParityII = (A) => {
  if (!Array.isArray(A)) return undefined;
  if (!A.length) return -1;

  const result = new Array(A.length);
  let evenIdx = 0;
  let oddIdx = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result[evenIdx] = A[i];
      evenIdx += 2;
    } else {
      result[oddIdx] = A[i];
      oddIdx += 2;
    }
  }

  return result;
};

// unoptimized
module.exports._sortArrayByParityII = (A) => {
  if (!A.length) return -1;
  const evens = [];
  const odds = [];
  const res = [];

  for (const num of A) {
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  for (const [index, num] of A.entries()) {
    if (index % 2 === 0) {
      res.push(evens.pop());
    } else {
      res.push(odds.pop());
    }
  }
  return res;
};
