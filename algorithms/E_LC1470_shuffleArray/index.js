// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

module.exports.shuffle = (nums, n) => {
  if (!Array.isArray(nums)) return undefined;
  if (!nums.length) return undefined;

  const payload = [];

  for (let i = 0; i < n; i++) {
    payload.push(nums[i], nums[n + i]);
  }

  return payload;
};
