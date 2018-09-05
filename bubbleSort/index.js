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
let t1 = performance.now()
bubbleSortUO([-10, 2, -50, 4, 3, 8, 9, 45, -100, 30, 2, 9, 8, 4, 3, 2, 10, 30, 44, 1004, -3000, 5000, -10])
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

t1 = performance.now()
bubbleSortES6([-10, 2, -50, 4, 3, 8, 9, 45, -100, 30, 2, 9, 8, 4, 3, 2, 10, 30, 44, 1004, -3000, 5000, -10])
t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

t1 = performance.now()
bubbleSortOP([-10, 2, -50, 4, 3, 8, 9, 45, -100, 30, 2, 9, 8, 4, 3, 2, 10, 30, 44, 1004, -3000, 5000, -10])
t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`)

module.exports = { bubbleSortES6, bubbleSortOP, bubbleSortUO }
