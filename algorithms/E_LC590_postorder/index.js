// 590. N-ary Tree Postorder Traversal
// Easy

// 642

// 64

// Add to List

// Share
// Given an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

var postorder = function (root) {
  const data = [];

  function traverse(node) {
    if (!node) return null;
    node.children.forEach((child) => {
      traverse(child);
    });
    data.push(node.val);
  }
  traverse(root);
  return data;
};
