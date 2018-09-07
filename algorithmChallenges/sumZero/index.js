const { performance } = require('perf_hooks')

// write a function sumZero which accepts a sorted array of integers.  The function should find the first pair where the sum is 0.  Return an array that includes both values that sum to zero or undefined if a pair does not exist

// o(n^2) solution
function sumZeroON2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// o(n) solution
function sumZeroON(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// performance

let t1 = performance.now()
sumZeroON2([-4, -3, -2, -1, 0, 1, 2, 5])
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

console.log(sumZeroON([-4, -3, -2, -1, 0, 1, 2, 5]))
let t3 = performance.now()
sumZeroON([-4, -3, -2, -1, 0, 1, 2, 5])
let t4 = performance.now()
console.log(`elapsed time: ${(t4 - t3) / 1000} seconds`)

module.exports = { sumZeroON, sumZeroON2 }
