const { performance } = require('perf_hooks')

// Given an array of integers and a number, write a function called maxSub.  Which finds the maximum sum of a subarray with the length of the number passed to the function

// maxSubarraySum([100,200,300,400],2) //700
// maxSubarraySum([1,4,2,10,23,3,1,0,20],4) //39

// o(n^2) solution
function maxSubON2(arr, num) {
  if (num > arr.length) return null

  let max = 0

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// o(n) solution
function maxSubON(arr, num) {
  if (num > arr.length) return null
  let max = 0
  let temp = 0

  for (let i = 0; i < num; i++) {
    max += arr[i]
  }

  temp = max
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    max = Math.max(temp, max)
  }
  return max
}

// performance
let t1 = performance.now()
maxSubON2([2, 6, 4, 3, 2, 4, 6, 9, 10, 11, 5, 20, 99, 33], 3)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

let t3 = performance.now()
maxSubON([2, 6, 4, 3, 2, 4, 6, 9, 10, 11, 5, 20, 99, 33], 3)
let t4 = performance.now()
console.log(`elapsed time: ${(t4 - t3) / 1000} seconds`)

module.exports = { maxSubON2, maxSubON }
