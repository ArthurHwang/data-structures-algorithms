/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
module.exports.reverseString = (s) => {
  if (!Array.isArray(s)) return undefined;
  if (!s.length) return [];

  let i = 0;
  let j = s.length - 1;

  while (i < Math.floor(s.length / 2)) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;

    i++;
    j--;
  }
  return s;
};
