class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports.DoublyLinkedList = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {}

  shift() {}

  unshift() {}

  get() {}

  set() {}

  insert() {}

  remove() {}
};

const DLL = new module.exports.DoublyLinkedList();

DLL.push(1);
DLL.push(2);
DLL.push(3);

const util = require('util');

console.log(util.inspect(DLL, { showHidden: false, depth: null }));
