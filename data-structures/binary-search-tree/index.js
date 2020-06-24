class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports.BinarySearchTree = class {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value === val) return current;
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value === val) return true;
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  BFS() {
    const data = [];
    const queue = [this.root];
    let node = null;

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    return data;
  }
};

const BST = new module.exports.BinarySearchTree();

BST.insert(5);
BST.insert(7);
BST.insert(3);
BST.insert(20);
BST.insert(1);
// console.log(BST.find(20));

console.log(BST.BFS());

const util = require('util');

// console.log(util.inspect(BST, { showHidden: false, depth: null }));
