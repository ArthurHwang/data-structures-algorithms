class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let currentNode = this.head
    let previous = this.head
    while (currentNode.next) {
      previous = currentNode
      currentNode = currentNode.next
    }
    this.tail = previous
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return currentNode
  }

  shift() {
    if (!this.head) return undefined
    let headNode = this.head
    this.head = headNode.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return headNode
  }

  unshift(val) {
    const newNode = new Node(val)
    const previousHead = this.head

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.head = newNode
      this.head.next = previousHead
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index > this.length) return null
    let count = 0
    let currentNode = this.head

    while (count < index) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.unshift(0)

console.log(list)

module.exports = SinglyLinkedList
