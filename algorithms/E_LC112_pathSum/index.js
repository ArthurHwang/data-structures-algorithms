// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

var hasPathSum = function (root, sum) {
	if (!root) return false;

	let found = false;

	(function traverse(node, tempSum) {
		if (found === true) return;
		if (!node.left && !node.right && tempSum === sum) found = true;
		node.left && traverse(node.left, tempSum + node.left.val);
		node.right && traverse(node.right, tempSum + node.right.val);
	})(root, root.val);

	return found;
};
