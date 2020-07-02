class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports.SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  pop = () => {
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
  };

  shift = () => {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  };

  unshift = (val) => {
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
  };

  get = (idx) => {
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
  };

  set = (val, idx) => {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }
    current.val = val;
  };

  insert = (val, idx) => {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
    }

    const newNode = new Node(val);

    if (!this.head || idx === this.length) {
      this.push(val);
    } else {
      let current = this.head;
      let previousNode = null;
      let count = 0;

      while (count !== idx) {
        previousNode = current;
        current = current.next;
        count++;
      }
      previousNode.next = newNode;
      newNode.next = current;
      this.length++;
    }
  };

  remove = (idx) => {
    if (idx === 0) {
      this.shift();
      return;
    }
    if (idx === this.length) {
      this.pop();
      return;
    }
    if (idx < 0 || idx > this.length) {
      return false;
    }

    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = temp.next;
    this.length--;
  };

  reverse = () => {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let previous = null;
    let temp;

    while (current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
  };
};
