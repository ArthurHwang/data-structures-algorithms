const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

module.exports.quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    this.quickSort(arr, left, pivotIndex - 1);
    this.quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(this.quickSort([4, 2, 0, 30, -500, 200]));
