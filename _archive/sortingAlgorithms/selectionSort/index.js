const { performance } = require('perf_hooks')

// unoptimized
function selectionSortV1(arr) {
  if (!Array.isArray(arr) || !arr.length) return undefined

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
  }
  return arr
}

// optimized
function selectionSortV2(arr) {
  if (!Array.isArray(arr) || !arr.length) return undefined

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

// performance
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

let t1 = performance.now()
selectionSortV1(data)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~14 seconds

t1 = performance.now()
selectionSortV2(data)
t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~7 seconds

module.exports = { selectionSortV1, selectionSortV2 }
