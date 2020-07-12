const merge = (arr1, arr2) => {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log(results);
  return results;
};

module.exports.mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let left = this.mergeSort(arr.slice(0, midpoint));
  let right = this.mergeSort(arr.slice(midpoint));
  console.log(right);
  return merge(left, right);
};

console.log(this.mergeSort([1, 5, 7, -5, 200, 300]));
