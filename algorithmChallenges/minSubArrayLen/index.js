const { performance } = require('perf_hooks')
// Write a function called minSubArrayLen which accepts two parameters - an array of poitive integers and a positive integer
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.  If there isn't one, return 0 instead

// o(n^2) solution
function minSubArrayLenON2(arr, num) {
  let tracker = []

  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let j = i + 1; j < arr.length; j++) {
      temp += arr[j]

      if (temp >= num) {
        tracker.push(j - i)
      }
    }
  }
  return tracker.length ? Math.min(...tracker) : 0
}

// o(n) solution
function minSubArrayLenON(arr, num) {
  let start = 0
  let end = 0
  let total = 0
  let minLength = Infinity

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end]
      end++
    } else if (total >= num) {
      minLength = Math.min(end - start, minLength)
      total -= arr[start]
      start++
    } else {
      break
    }
  }
  return minLength === Infinity ? 0 : minLength
}

// performance
let t1 = performance.now()
minSubArrayLenON2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

let t3 = performance.now()
minSubArrayLenON([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
let t4 = performance.now()
console.log(`elapsed time: ${(t4 - t3) / 1000} seconds`)
module.exports = { minSubArrayLenON2, minSubArrayLenON }
