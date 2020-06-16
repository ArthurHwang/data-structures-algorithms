const { performance } = require('perf_hooks')

function merge(arr1, arr2) {
  const mergedArray = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i])
      i++
    } else {
      mergedArray.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j])
    j++
  }
  return mergedArray
}

// o(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

// performance
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)
let t1 = performance.now()
mergeSort(data)
let t2 = performance.now()
console.log(`elapsed time: ${(t2 - t1) / 1000} seconds`) // ~0.038 seconds

module.exports = { mergeSort, merge }
