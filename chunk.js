// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   if (!Array.isArray(array)) return 'please supply a valid array';
//   if (!Array.length) return null;
//   if (typeof size !== 'number')
//     return 'please supply a valid number chunk size';

//   const chunked = [];
//   let i = 0;
//   // write for loop, that will splice the correct number of array items
//   while (i < array.length) {
//     chunked.push(array.slice(i, size + i));
//     i += size;
//   }
//   // update i to the previous value after splice
//   console.log(chunked);
//   return chunked;
//   // if there is a remainder, chunk it to a new array
// }

// chunk([1, 2, 3, 4, 5], 2);
function chunk2(array, size) {
  if (!Array.isArray(array)) return 'please supply a valid array';
  if (!Array.length) return null;
  if (typeof size !== 'number')
    return 'please supply a valid number chunk size';

  const chunked = [];
  let i = 0;

  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }

  console.log(chunked);
}

chunk2([1, 2, 3, 4, 5, 6, 7], 5);
module.exports = chunk2;
