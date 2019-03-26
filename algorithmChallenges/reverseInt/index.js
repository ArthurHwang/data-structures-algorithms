// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse1 = function (x) {
  const MAX_SAFE_INT = Math.pow(2, 31) - 1
  const MIN_SAFE_INT = -(Math.pow(2, 31) - 1)

  const numArray = x
    .toString()
    .split('')
    .reverse()

  if (numArray.includes('-')) {
    numArray.pop()
    numArray.unshift('-')
  }

  let reverseNum = +numArray.join('')
  if (reverseNum > MAX_SAFE_INT || reverseNum < MIN_SAFE_INT) {
    return 0
  }
  return reverseNum
}

var reverse2 = function (x) {
  const MAX_SAFE_INT = Math.pow(2, 31) - 1
  const MIN_SAFE_INT = -(Math.pow(2, 31) - 1)
  const stringify = x.toString()
  const reverse = []

  for (let i = stringify.length - 1; i >= 0; i--) {
    reverse.push(stringify[i])
  }

  if (reverse[reverse.length - 1] === '-') {
    reverse.pop()
    reverse.unshift('-')
  }

  if (+reverse.join('') > MAX_SAFE_INT || +reverse.join('') < MIN_SAFE_INT) return 0

  return +reverse.join('')
}

var reverse3 = function(x) {
  const MAX_SAFE_INT = Math.pow(2, 31) - 1
  const MIN_SAFE_INT = -(Math.pow(2, 31) - 1)
  const stringify = x.toString()
  const reverse = []

  for (let i = stringify.length - 1; i >= 0; i--) {
    reverse.push(stringify[i])
  }

  if(reverse[reverse.length - 1] === '-') {
    reverse.pop()
    reverse.unshift('-')
  }

 return (+reverse.join('') > MAX_SAFE_INT || +reverse.join('') < MIN_SAFE_INT) ?  0 : +reverse.join('')
};
