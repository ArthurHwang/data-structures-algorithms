const { performance } = require('perf_hooks')

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appear somewhere in the second string, without thie r order changing.

// o(n) solution
function isSubsequence(str1, str2) {
  if (!str1 || !str2) return undefined
  let temporaryStr = ''
  let i = 0

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++
      temporaryStr += str2[j]
    }
  }

  if (temporaryStr === str1) {
    return true
  } else {
    return false
  }
}

let t1 = performance.now()
isSubsequence('abc', 'acb')
let t2 = performance.now()
console.log(`Elapsed Time: ${(t2 - t1) / 1000} seconds`)

module.exports = isSubsequence
