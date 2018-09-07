const { performance } = require('perf_hooks')

// Write a function that counts the amount of times each character in a string appears.

// o(n) solution
function charCount(str) {
  if (!str) return undefined

  const result = {}

  const trimmedStr = str
  for (let char of trimmedStr) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1
    }
  }
  return result
}

// performance
let t1 = performance.now()
charCount('hello world')
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = charCount
