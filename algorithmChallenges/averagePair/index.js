const { performance } = require('perf_hooks')

// Write a function called averagePair.
// Given a sorted array of integers and a target average
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the target averagePair

// o(n) solution
function averagePair(arr, target) {
  if (!arr.length || !target) return undefined

  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex < endIndex) {
    let avg = (arr[startIndex] + arr[endIndex]) / 2
    if (avg === target) {
      return true
    } else if (avg < target) {
      startIndex++
    } else {
      endIndex--
    }
  }
  return false
}

// performance
let t1 = performance.now()
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = averagePair
