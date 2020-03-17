class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }

  pop() {
    if (!this.first) return null
    const temp = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
      temp.next = null
    }
    this.size--
    return temp.value
  }
}

// Access - O(N)
// Insertion - O(1)
// Destroy - O(1)
// Search - O(N)

module.exports = Stack
