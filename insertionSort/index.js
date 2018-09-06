const { performance } = require('perf_hooks')

function insertionSortV1(arr) {
  if (!Array.isArray(arr) || !arr.length) return undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
      if (i > 1) {
        for (let j = 0; j < i; j++) {
          if (arr[i] < arr[j]) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
          }
        }
      }
    }
  }
  return arr
}

function insertionSortV2(arr) {
  if (!Array.isArray(arr) || !arr.length) return undefined
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSortV1([2, 1, 9, 75, 4, 3, -50, 20, 30]))
console.log(insertionSortV2([2, 1, 9, 75, 4, 3, -50, 20, 30]))
//  j
module.exports = { insertionSortV1, insertionSortV2 }
