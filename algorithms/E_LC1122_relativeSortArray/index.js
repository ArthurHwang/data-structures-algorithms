// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

module.exports.relativeSortArray = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) return undefined;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;

  const map = new Map();
  const result = [];
  const remaining = [];

  for (const num of arr1) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  for (const num of arr2) {
    const length = map.get(num);
    result.push(...Array.from({ length: length }).fill(num));
    map.delete(num);
  }

  for (const [key, length] of map) {
    remaining.push(...Array.from({ length: length }).fill(key));
  }

  return [...result, ...remaining.sort((a, b) => a - b)];
};
