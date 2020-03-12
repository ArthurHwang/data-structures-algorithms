function validAnagram(str1, str2) {
  const map1 = {};
  // const map2 = {};

  Array.prototype.forEach.call(
    str1,
    char => (map1[char] = (map1[char] || 0) + 1)
  );

  Array.prototype.forEach.call(
    str2,
    char => (map1[char] = (map1[char] || 0) - 1)
  );

  // console.log(map1);
  console.log(map1);
  // for (const key in map1) {
  //   if (!map2[key] || map2[key] !== map1[key]) {
  //     return false;
  //   }
  // }
  // return true;
}

console.log(validAnagram('aaz', 'zza'));
