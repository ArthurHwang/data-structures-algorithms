// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

var addDigits = function (num) {
  let sum = num;

  while (sum > 9) {
    const split = [...sum.toString()];
    sum = split.reduce((acc, num) => {
      return acc + parseInt(num);
    }, 0);
  }

  return sum;
};
