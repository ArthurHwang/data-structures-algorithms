var smallerNumbersThanCurrent = function(nums) {
  //   for (

  const payload = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }

    payload.push(count);
    count = 0;
  }

  return payload;
};
