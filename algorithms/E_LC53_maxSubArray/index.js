/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.maxSubArray = function (nums) {
  if (nums.length === 1 && nums[0] >= 0) {
    return nums[0];
  }
  if (nums.length === 1 && nums[0] < 0) {
    return 0;
  }
  if (!nums.length) return 0;
  if (!Array.isArray(nums)) return undefined;

  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let tempMax = 0;
    for (let j = i; j < nums.length; j++) {
      tempMax += nums[j];
      max = Math.max(max, tempMax);
    }
  }

  return max;
};
