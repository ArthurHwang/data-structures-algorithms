const { performance } = require('perf_hooks')

function recursiveRange(num) {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

// performance
let t1 = performance.now()
recursiveRange(10)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = recursiveRange
