// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.
var numJewelsInStones = function(J, S) {
  // brute force

  // create and initialize count variable, set to 0
  let count = 0;
  // loop over J
  for (let match of J) {
    // loop over S
    for (let char of S) {
      // if J[i] === S[i], increase counter
      if (match === char) {
        count++;
      }
    }
  }

  // return counter
  return count;
};

var numJewelsInStones = function(J, S) {
  // brute force

  // create count variable, initialize to 0
  let count = 0;
  //   create a count dictionary of characters
  const map = {};
  // loop over S
  for (let char of J) {
    map[char] = map[char] + 1 || 1;
  }
  // if dictionary Key matches, increase count
  for (let char of S) {
    if (map[char]) {
      count++;
    }
  }

  return count;
};
