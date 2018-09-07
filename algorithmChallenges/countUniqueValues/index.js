const { performance } = require('perf_hooks')

// implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array
// There can be negative numbers in the array, but it will always be sorted

// o(n) solution
function countUniqueValues(arr) {
  if (!Array.isArray(arr)) return undefined
  if (!arr.length) return 0

  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

// performance
let t1 = performance.now()
countUniqueValues([1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5])
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = countUniqueValues
