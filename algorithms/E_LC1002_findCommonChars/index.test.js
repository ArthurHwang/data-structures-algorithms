// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

const commonChars = (A) => {
  if (!Array.isArray(A)) return undefined;
  if (!A.length) return [];

  return A.reduce(findCommon, A[0].split(''));
};

const findCommon = (acc, curr) => {
  const currentVal = curr.split('');
  return acc.filter((char) => {
    const i = currentVal.indexOf(char);
    if (i !== -1) {
      currentVal.splice(i, 1);
      return true;
    }
  });
};

console.log(commonChars(['cool', 'lock', 'cook']));
