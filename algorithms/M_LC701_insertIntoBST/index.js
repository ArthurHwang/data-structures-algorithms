// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

var insertIntoBST = function (root, val) {
	if (!root) root = new TreeNode(val);
	else traverse(root);
	return root;
};

function traverse(node) {
	if (!node) return;
	if (!node.left && val < node.val) node.left = new TreeNode(val);
	if (!node.right && val > node.val) node.right = new TreeNode(val);

	if (val > node.val) traverse(node.right);
	else traverse(node.left);
}
