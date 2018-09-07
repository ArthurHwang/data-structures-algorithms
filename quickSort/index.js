const { performance } = require('perf_hooks')

function partition(arr, startIdx = 0, endIdx = arr.length - 1) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
  }
  let pivot = arr[startIdx]
  let swapIdx = startIdx

  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, startIdx, swapIdx)
  return swapIdx
}

// o(n log n)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}
console.log(quickSort([1, 2, 3, -5, 4, -10]))

// performance
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)
let t1 = performance.now()
quickSort(data)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~0.018 seconds

module.exports = quickSort
