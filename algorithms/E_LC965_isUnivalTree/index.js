// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

module.exports.isUnivalTreeBFS = (root) => {
  if (!root) return undefined;

  const queue = [root];
  const valueToCheck = root.val;

  while (queue.length) {
    const node = queue.shift();

    if (node.val !== valueToCheck) {
      return false;
    }

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return true;
};

module.exports.isUnivalTreeDFS = (root) => {
  if (!root) return true;

  let isLeftSame = true;
  let isRightSame = true;

  if (root.left) {
    isLeftSame = root.val === root.left.val && isUnivalTree(root.left);
  }

  if (root.right) {
    isRightSame = root.val === root.right.val && isUnivalTree(root.right);
  }

  return isLeftSame && isRightSame;
};

// module.exports.isUnivalTreeDFS = (root) => {
//   if (!root) return true;

//   const traverse = (node, val) => {
//     if (node.val !== val) {
//       return false;
//     }
//     node.left && traverse(node.left, val);
//     node.right && traverse(node.right, val);
//   };

//   traverse(root, root.val);

//   return true;
// };
