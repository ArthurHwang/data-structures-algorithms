function binarySearch(arr, val) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([1, 4, 8], 8));
//                              R
//                                L
//                              M
