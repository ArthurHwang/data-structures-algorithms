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
        if (newNode.value === currentNode.value) return undefined
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

  search(val) {
    if (!this.root) return false
    if (this.root.value === val) {
      return true
    } else {
      let currentNode = this.root
      while (currentNode) {
        if (currentNode.value === val) {
          return true
        } else if (val < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left
          } else {
            return false
          }
        } else if (val > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right
          } else {
            return false
          }
        }
      }
    }
  }
}

const BST = new BinarySearchTree()

BST.insert(100)
BST.insert(0)
BST.insert(40)
BST.insert(90)
BST.insert(10)
BST.insert(200)

// console.log(BST)
console.log(BST.search(1000))

module.exports = BinarySearchTree
