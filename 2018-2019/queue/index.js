class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = this.last.next
    }
    return ++this.size
  }

  dequeue() {
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

module.exports = Queue
