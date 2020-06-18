class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports.LinkedList = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;
      this.head = newNode;
      this.head.next = current;
    }
    this.length++;
  }

  get(idx) {
    if (!this.head || !this.length) return null;
    if (idx > this.length || idx < 0) return undefined;

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        return current;
      }
      current = current.next;
      count++;
    }
  }
};

// const LL = new LinkedList();

// module.exports = { LinkedList };
