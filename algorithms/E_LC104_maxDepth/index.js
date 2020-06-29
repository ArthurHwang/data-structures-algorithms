/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 **/

//  BFS
module.exports.maxDepthBFS = (root) => {
  //process each tree level one by one
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let item = queue.shift();
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    depth++;
  }

  return depth;
};

// DFS
module.exports.maxDepthDFS = (root) => {
  if (!root) return 0;

  let left = maxDepthDFS(root.left);
  let right = maxDepthDFS(root.right);

  return Math.max(left, right) + 1;
};
