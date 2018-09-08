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
    let printArray = []
    let currentNode = this.head
    while (currentNode) {
      printArray.push(currentNode.val)
      currentNode = currentNode.next
    }
    console.log(printArray, this.length)
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

  remove(index) {}
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)

list.print()

list.insert(1, 'WOW')

list.print()

// console.log(list)

module.exports = DoublyLinkedList
