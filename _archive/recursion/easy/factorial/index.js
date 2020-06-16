const { performance } = require('perf_hooks')

function factorial(num) {
  if (num <= 0) return 1
  return num * factorial(num - 1)
}

// performance
let t1 = performance.now()
factorial(10)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = factorial
