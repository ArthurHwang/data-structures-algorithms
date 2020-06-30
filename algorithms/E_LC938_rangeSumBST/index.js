// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

//  DFS
module.exports.rangeSumBSTdFS = (root, L, R) => {
  if (!root) return 0;

  let sum = 0;
  function traverse(node) {
    if (!node) return;
    if (node.value >= L && node.value <= R) sum += node.value;
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(root);
  return sum;
};

// BFS;
module.exports.rangeSumBSTbFS = (root, L, R) => {
  if (!root) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.value >= L && node.value <= R) {
      sum += node.value;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return sum;
};
