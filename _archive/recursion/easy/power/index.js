const { performance } = require('perf_hooks')

function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// performance
let t1 = performance.now()
power(2, 20)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = power
