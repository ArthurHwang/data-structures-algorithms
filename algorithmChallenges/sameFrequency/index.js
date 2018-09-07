const { performance } = require('perf_hooks')
// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits

// o(n) solution
function sameFrequency(num1, num2) {
  const num1Obj = {}
  const num2Obj = {}

  for (let char of num1.toString()) {
    num1Obj[char] = (num1Obj[char] || 0) + 1
  }
  for (let char of num2.toString()) {
    num2Obj[char] = (num2Obj[char] || 0) + 1
  }

  for (let key in num1Obj) {
    if (!(key in num2Obj)) {
      return false
    }
    if (num1Obj[key] !== num2Obj[key]) {
      return false
    }
  }
  return true
}

// performance
let t1 = performance.now()
sameFrequency(123456789, 987654321)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = sameFrequency
