const { performance } = require('perf_hooks')

// write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array

// o(n^2) solution
function maxSubarraySumON2(arr, num) {
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
function maxSubarraySumON(arr, num) {
  if (num > arr.length) return null
  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// performance
let t1 = performance.now()
maxSubarraySumON2([2, 6, 4, 3, 2, 4, 6, 9, 10, 11, 5, 20, 99, 33], 3)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

let t3 = performance.now()
maxSubarraySumON([2, 6, 4, 3, 2, 4, 6, 9, 10, 11, 5, 20, 99, 33], 3)
let t4 = performance.now()
console.log(`elapsed time: ${(t4 - t3) / 1000} seconds`)

module.exports = { maxSubarraySumON2, maxSubarraySumON }
