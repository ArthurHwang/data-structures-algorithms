const { performance } = require('perf_hooks')

// o(n^2)
const twoSum = (nums, target) => {
  if (!Array.isArray(nums) || !nums.length) return undefined

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return -1
}

// o(n)
const twoSum2 = (nums, target) => {
  if (!Array.isArray(nums) || !nums.length) return undefined

  let i = 0
  let j = i + 1

  while (i < nums.length) {
    if (nums[i] + nums[j] === target) {
      return [i, j]
    } else {
      i++
      j++
    }
  }

  return -1
}

console.log(twoSum([2, 4, 6, 5, 3], 8))
console.log(twoSum2([2, 4, 6, 8, 10], 14))
const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

let t1 = performance.now()
twoSum(data, 88)
let t2 = performance.now()
console.log(`elapsed time ${(t2 - t1) / 1000} seconds`) // ~5 seconds

let t3 = performance.now()
twoSum(data, 88)
let t4 = performance.now()
console.log(`elapsed time ${(t4 - t3) / 1000} seconds`) // ~5 seconds

module.exports = {
  twoSum,
  twoSum2
}
