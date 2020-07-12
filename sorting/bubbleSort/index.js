const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

module.exports.bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
        j = 0;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
