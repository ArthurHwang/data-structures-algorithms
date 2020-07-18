// Find the sum of all left leaves in a given binary tree.

var sumOfLeftLeaves = function (root) {
  let sum = 0;

  (function traverse(node, isLeft = false) {
    if (!node) return;
    if (isLeft && !node.left && !node.right) {
      sum += node.val;
    }
    node.left && traverse(node.left, true);
    node.right && traverse(node.right, false);
  })(root, false);

  return sum;
};
