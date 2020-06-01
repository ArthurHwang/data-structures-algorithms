const { performance } = require('perf_hooks')

// unoptimized
function bubbleSortUO(arr) {
  if (!arr.length) return null
  if (!Array.isArray(arr)) return undefined
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// es2015 version
function bubbleSortES6(arr) {
  if (!arr.length) return null
  if (!Array.isArray(arr)) return undefined
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// optimized
function bubbleSortOP(arr) {
  if (!arr.length) return null
  if (!Array.isArray(arr)) return undefined
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

// performance
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

let t1 = performance.now()
bubbleSortUO(data)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~17 seconds

t1 = performance.now()
bubbleSortES6(data)
t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~11 seconds

t1 = performance.now()
bubbleSortOP(data)
t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~0.0017 seconds

module.exports = { bubbleSortES6, bubbleSortOP, bubbleSortUO }
