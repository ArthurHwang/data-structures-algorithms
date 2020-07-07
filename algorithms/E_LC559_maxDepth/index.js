// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// BFS
module.exports.maxDepthBFS = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depthCount = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      for (const child of node.children) queue.push(child);
    }
    depthCount++;
  }
  return depthCount;
};

// DFS
module.exports.maxDepthDFS = (root) => {
  if (!root) return 0;

  let depth = 0;
  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }
  return depth + 1;
};
