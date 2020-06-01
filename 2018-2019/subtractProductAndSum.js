// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

// Constraints:

// 1 <= n <= 10^5

// Assumptions:
// n is a positive integer

function getProductAndSum(n) {
  let productTotal = 1;
  let sumTotal = 0;
  n.forEach(num => {
    productTotal *= num;
    sumTotal += num;
  });
  return { productTotal, sumTotal };
}

var subtractProductAndSum = function(n) {
  if (typeof n !== 'number') return 'please supply a valid number';

  const numParse = Number(n)
    .toString()
    .split('')
    .map(num => Number(num));

  const { productTotal: product, sumTotal: sum } = getProductAndSum(numParse);

  return product - sum;
};

console.log(subtractProductAndSum(44321));
