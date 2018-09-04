const { performance } = require('perf_hooks')

function fib(num) {
  if (num <= 2) return 1
  return fib(num - 1) + fib(num - 2)
}

let t1 = performance.now()
fib(35)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = fib
