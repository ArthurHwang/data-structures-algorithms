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

  BFS() {
    const data = []
    const queue = []
    let node = this.root
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  DFSPreorder() {
    const data = []
    let current = this.root
    const traverse = node => {
      data.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  DFSPostorder() {
    const data = []
    let current = this.root
    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node)
    }
    traverse(current)
    return data
  }

  DFSInorder() {
    const data = []
    let current = this.root
    const traverse = node => {
      if (node.left) traverse(node.left)
      data.push(node)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
}

// Insertion - O(log n)
// Searching - O(log n)

module.exports = BinarySearchTree
