// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// Note:

// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    let currentNode = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    while (true) {
      if (val === currentNode.value) return undefined;
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    return found ? currentNode : null;
  }

  contains(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  DFSPostorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    };
    traverse(current);
    return data;
  }

  DFSInorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const rangeSumBST = (root, L, R) => {
  let total = 0;
  const traverse = node => {
    // console.log(node);
    console.log(node.value);
    if (node.value >= L && node.value <= R) total += node.value;
    if (node.value !== null) traverse(node.left);
    if (node.value !== null) traverse(node.right);
  };

  traverse(root);
  return sum;
};

const bst = new BinarySearchTree();

[10, 5, 15, 20, 3, 7, null, 18].forEach(item => {
  bst.insert(item);
});

// console.log(bst.root);

console.log(rangeSumBST(bst.root, 7, 15));
