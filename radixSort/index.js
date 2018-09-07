const { performance } = require('perf_hooks')

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / 10 ** i) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let max = 0
  for (let element of nums) {
    if (digitCount(element) > max) {
      max = digitCount(element)
    }
  }
  return max
}

// o(nk)
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

// performance
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)
let t1 = performance.now()
radixSort(data)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~0.008 seconds

module.exports = { radixSort, getDigit, digitCount, mostDigits }
