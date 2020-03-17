class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getLength() {
    return 2;
  }

  getTail() {
    return this.tail;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }
}

const LL = new SinglyLinkedList();

LL.insert(1);
LL.insert(2);
LL.insert(3);
console.lo;
console.log(LL.getLength(2));
console.log(LL.getTail());
console.log(LL);

function deleteNode(headnode, val) {
  let current = headnode;

  while (current) {
    let previous = current;
    let next = current.next;

    if (next.val === val && next.next) {
      previous.next = next.next;
      return next;
    } else {
      current = current.next;
    }
  }
}

console.log(deleteNode(LL.head));
