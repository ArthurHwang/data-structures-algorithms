const { performance } = require('perf_hooks')

// Implement a function called areThereDuplicates which accepts a variable number of arguments
// It checks wheter there are any duplicates among the arguments passed in.

// Pointer Pattern
// o(n) solution
function areThereDuplicatesPOINT(...args) {
  if (!args.length) return undefined
  args.sort((a, b) => a > b)

  let i = 0
  let j = 1

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true
    }
    i++
    j++
  }
  return false
}

// Frequency Pattern
// o(n) solution
function areThereDuplicatesFREQ(...args) {
  if (!args.length) return undefined
  const argsArray = args

  const argsObject = {}

  for (let item of argsArray) {
    argsObject[item] = (argsObject[item] || 0) + 1
  }

  for (let key in argsObject) {
    if (argsObject[key] > 1) {
      return true
    }
  }
  return false
}

module.exports = { areThereDuplicatesFREQ, areThereDuplicatesPOINT }
