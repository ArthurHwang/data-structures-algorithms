// Given an integer, reverse the order of the digits.
exports.reverseInt = function (num) {
  if (typeof num !== 'number') {
    return undefined
  }

  const numbers = num
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(numbers)
}

exports._reverseInt = function (num) {
  let reverseNum = ''
  const numString = num.toString()

  for (let number of numString) {
    reverseNum = number + reverseNum
  }

  return parseInt(reverseNum)
}
