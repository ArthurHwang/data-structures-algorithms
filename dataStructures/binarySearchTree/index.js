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
