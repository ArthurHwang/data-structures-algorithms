// Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.

//   Example 1:

// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Example 2:

// Input: [-7, -3, 2, 3, 11]
// Output: [4, 9, 9, 49, 121]

// Note:

// 1 <= A.length <= 10000
//   - 10000 <= A[i] <= 10000
// A is sorted in non - decreasing order.

// const sortedSquares = array => {
//   const exponentArray = []

//   for (let i = 0; i < array.length; i++) {
//     exponentArray.push(Math.pow(array[i], 2))
//   }

//   exponentArray.sort((a, b) => a - b)

//   return exponentArray
// }

const sortedSquares = array => {
  const exponentArray = []

  for (let i = 0; i < array.length; i++) {
    exponentArray.push(array[i] * array[i])
  }

  exponentArray.sort((a, b) => a - b)

  return exponentArray
}

console.log(Math.pow(-4, 2))

console.log(sortedSquares([-4, -1, 0, 3, 10]))
