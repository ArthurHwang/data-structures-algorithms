function bubbleSort(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwaps = false;

    for (let j = 0; j < i; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
        count++;
      }
    }

    if (noSwaps) break;
  }
  console.log(count);
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(bubbleSort([-55, 55, 5, 44, -44, 1, 2, 3]));

function bubbleSort2(arr) {
  // start i at the end of array

  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let hasSwapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapped = true;
      }
    }

    if (hasSwapped === false) {
      break;
    }
  }

  // start j at the beginning of array while less than i

  // if (j is greater than j + 1) , swap
  console.log(count);
  return arr;
}

console.log(bubbleSort2([-5, 1, 2, 3, 4, 22]));
