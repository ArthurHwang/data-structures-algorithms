const { performance } = require('perf_hooks')

function productOfArray(arr) {
  if (!arr.length) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

// performance
let t1 = performance.now()
productOfArray([1, 2, 3, 10])
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = productOfArray
