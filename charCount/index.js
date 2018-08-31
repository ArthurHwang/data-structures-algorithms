function charCount(str) {
  if (!str) return undefined;

  const result = {};

  const trimmedStr = str;
  for (let char of trimmedStr) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

module.exports = charCount;
