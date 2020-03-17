class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  print() {
    if (!this.head) return null
    const printArray = []
    let currentNode = this.head
    while (currentNode) {
      printArray.push(currentNode.val)
      currentNode = currentNode.next
    }
    console.log(printArray, this.length)
  }

  pop() {
    if (!this.head) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (!this.head) return undefined
    const shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }

  unshift(val) {
    const headNode = this.head
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      newNode.next = headNode
      headNode.prev = newNode
    }
    this.length++
    return newNode
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index <= this.length / 2) {
      let currentNode = this.head
      let counter = 0
      while (index !== counter) {
        currentNode = currentNode.next
        counter++
      }
      return currentNode
    } else {
      let counter = this.length - 1
      let currentNode = this.tail
      while (index !== counter) {
        currentNode = currentNode.prev
        counter--
      }
      return currentNode
    }
  }

  set(index, val) {
    if (!this.head) return undefined
    if (index < 0 || index >= this.length) return undefined
    const node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)
    const newNode = new Node(val)
    const beforeNode = this.get(index - 1)
    const afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.next = afterNode
    afterNode.prev = newNode
    newNode.prev = beforeNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()
    const removedNode = this.get(index)
    const beforeNode = removedNode.prev
    const afterNode = removedNode.next

    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    removedNode.next = null
    removedNode.prev = null

    this.length--
    return true
  }
}

// Access - O(N)
// Insertion - O(1)
// Destroy - O(1)
// Search - O(N) || (O(N/2))

module.exports = DoublyLinkedList
