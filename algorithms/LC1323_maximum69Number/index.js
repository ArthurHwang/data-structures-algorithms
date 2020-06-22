// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

module.exports.maximum69Number = (num) => {
  if (typeof num !== 'number') return undefined;

  let max = num;
  const splitNums = num.toString().split('');

  splitNums.forEach((_num, idx) => {
    const copyArr = [...splitNums];
    copyArr[idx] === '6' ? (copyArr[idx] = '9') : (copyArr[idx] = '6');
    max = Math.max(max, Number(copyArr.join('')));
  });

  return max;
};
