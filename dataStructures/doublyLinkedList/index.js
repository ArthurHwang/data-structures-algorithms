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
    let returnedArray = []
    let currentNode = this.head
    while (currentNode) {
      returnedArray.push(currentNode.val)
      currentNode = currentNode.next
    }
    console.log(returnedArray, this.length)
  }

  pop() {
    let poppedNode = this.tail
    if (!this.head) return undefined
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
    let shiftedNode = this.head

    if (!this.head) return undefined
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
    let headNode = this.head
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
    if (index < this.length / 2) {
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

  set() {}

  insert() {}

  remove() {}
}

const list = new DoublyLinkedList()

list.push('fucker')
list.push('you')
list.push('whore')

list.print()

console.log(list.get(3))

// console.log(list)

module.exports = DoublyLinkedList
