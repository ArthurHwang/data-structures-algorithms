class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports.DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get totalSize() {
    return this.length;
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

  pop() {
    if (!this.head) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }

  shift() {
    if (!this.head) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const temp = this.head.next;
      this.head = temp;
      this.head.prev = null;
    }
    this.length--;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      newNode.next = temp;
      temp.prev = this.head;
    }
    this.length++;
  }

  get(idx) {
    if (!this.head) return null;
    if (this.length === 1) return this.head;
    if (idx === this.length - 1) return this.tail;
    if (idx > this.length - 1) return null;
    if (idx < 0) return null;

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(idx, val) {
    const findNode = this.get(idx);
    if (findNode) {
      findNode.val = val;
      return findNode;
    } else {
      return null;
    }
  }

  insert(idx, val) {
    if (!this.head || idx > this.length - 1) {
      this.push(val);
    } else if (idx === 0) {
      this.unshift(val);
    } else {
      const findNode = this.get(idx);
      const newNode = new Node(val);

      if (findNode) {
        const prev = findNode.prev;
        const next = findNode.next;
        prev.next = newNode;
        next.prev = newNode;
        newNode.next = next;
        newNode.prev = prev;
      }
      this.length++;
    }
  }

  remove(idx) {
    if (!this.head) return null;

    const findNode = this.get(idx);

    if (idx === 0) {
      this.shift();
    } else if (idx > this.length - 1) {
      this.pop();
    } else {
      if (findNode) {
        const prev = findNode.prev;
        const next = findNode.next;
        prev.next = next;
        next.prev = prev;
        findNode.next = null;
        findNode.prev = null;
        this.length--;
      }
    }
  }
};

const DLL = new module.exports.DoublyLinkedList();

DLL.push(5);
DLL.push(6);
DLL.push(7);
DLL.remove(0);
DLL.remove(5);

const util = require('util');

console.log(util.inspect(DLL, { showHidden: true, depth: null }));
