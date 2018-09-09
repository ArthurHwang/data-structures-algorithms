class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root

      while (true) {
        if (newNode.value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode
            return this
          } else {
            currentNode = currentNode.left
          }
        } else if (newNode.value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode
            return this
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }
}

const BST = new BinarySearchTree()

BST.insert(1)
BST.insert(0)

console.log(BST)

module.exports = BinarySearchTree
