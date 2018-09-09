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
    let currentNode = this.root
    if (!this.root) {
      this.root = newNode
      return this
    }
    while (true) {
      if (val === currentNode.value) return undefined
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else if (val > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  search(val) {
    if (!this.root) return false
    let currentNode = this.root
    let found = false

    while (currentNode && !found) {
      if (val < currentNode.value) {
        currentNode = currentNode.left
      } else if (val > currentNode.value) {
        currentNode = currentNode.right
      } else {
        found = true
      }
    }
    return found ? currentNode : null
  }

  contains(val) {
    if (!this.root) return false
    let currentNode = this.root
    let found = false

    while (currentNode && !found) {
      if (val < currentNode.value) {
        currentNode = currentNode.left
      } else if (val > currentNode.value) {
        currentNode = currentNode.right
      } else {
        found = true
      }
    }
    return found
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
console.log(BST.contains(90))
console.log(BST.contains(33))
console.log(BST.search(40))
console.log(BST.search(50))

module.exports = BinarySearchTree
