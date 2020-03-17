// 1051. Height Checker
// Easy

// 152

// 1037

// Add to List

// Share
// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

var heightChecker = function(heights) {
  // typecheck heights array

  if (!Array.isArray(heights)) return 'please supply a valid array argument';
  // make a copy and sort the heights array in ascending order

  const sortedHeights = [...heights].sort((a, b) => a - b);

  // create a counter variable

  let counter = 0;
  // loop over heights

  heights.forEach((child, idx) => {
    // if heights[i] !== copy[i] , increase counter
    if (child !== sortedHeights[idx]) {
      counter++;
    }
  });

  // return count
  return counter;
};

console.log(heightChecker([1, 2, 1, 2, 1, 1, 1, 2, 1]));

1, 1, 1, 2, 3, 4;
