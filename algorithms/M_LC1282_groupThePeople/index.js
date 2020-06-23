// There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

// You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution.

// optimized
module.exports.groupThePeople = (groupSizes) => {
  if (!groupSizes.length) return undefined;
  if (!Array.isArray(groupSizes)) return undefined;

  const groupHash = {};
  const result = [];

  for (const [index, groupId] of groupSizes.entries()) {
    const size = groupId;
    groupHash[size] ? groupHash[size].push(index) : (groupHash[size] = [index]);
    if (groupHash[size].length === size) {
      result.push(groupHash[size]);
      groupHash[size] = [];
    }
  }
  return result;
};

// unoptimized
module.exports.groupThePeople2 = (groupSizes) => {
  if (!groupSizes.length) return undefined;
  if (!Array.isArray(groupSizes)) return undefined;
  for (const [index, groupId] of groupSizes.entries()) {
    groupHash[groupId]
      ? groupHash[groupId].push(index)
      : (groupHash[groupId] = [index]);
  }
  const result = [];
  for (const [groupId, ids] of Object.entries(groupHash)) {
    const maxSize = Number(groupId);
    let subArray = [];
    ids.forEach((id) => {
      subArray.push(id);
      if (subArray.length === maxSize) {
        result.push(subArray);
        subArray = [];
      }
    });
  }
  return result;
};
