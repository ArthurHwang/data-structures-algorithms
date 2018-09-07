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
}

// const list = new SinglyLinkedList()
// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)

// list.pop()
// list.shift()

// console.log(list)
// console.log(list.head.next)
// console.log(list.head.next.next)
// console.log(list.head.next.next.next)

module.exports = { Node, SinglyLinkedList }
