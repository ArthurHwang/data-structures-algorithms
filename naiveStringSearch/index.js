const { performance } = require('perf_hooks')

// o(n^2) solution
function naiveStringSearch(str, substr) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break
      if (j === substr.length - 1) count++
    }
  }
  return count
}

console.log()
// performance
let t1 = performance.now()
naiveStringSearch('lomgzomgxomg', 'omg')
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = naiveStringSearch
