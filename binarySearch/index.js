// Write a function called binarySearch which accepts a sorted array and a value.
// It should return the index at which the value exists. Otherwise, return -1

// o(log n) solution
function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((right + left) / 2)

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1
    else left = middle + 1
    middle = Math.floor((right + left) / 2)
  }

  return arr[middle] === val ? middle : -1
}
