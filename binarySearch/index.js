const { performance } = require('perf_hooks')
// Write a function called binarySearch which accepts a sorted array and a value.
// It should return the index at which the value exists. Otherwise, return -1

// o(log n) solution
function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((right + left) / 2)

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1
    else left = middle + 1
    middle = Math.floor((right + left) / 2)
  }

  return arr[middle] === val ? middle : -1
}
// performance
let t1 = performance.now()
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = binarySearch
