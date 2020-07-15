// Given an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

var preorderDFS = function (root) {
  const data = [];

  function dfs(node) {
    if (!node) return;
    data.push(node.val);
    node.children.forEach((node) => {
      dfs(node);
    });
  }

  dfs(root);
  return data;
};

var preorderBFS = function (root) {
  const stack = [root];
  const data = [];

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    data.unshift(node.val);
    stack.push(...node.children);
  }

  return data;
};
