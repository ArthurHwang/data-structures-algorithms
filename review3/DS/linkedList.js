// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const node = new Node(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.tail.next = node;
//       this.tail = this.tail.next;
//     }
//     this.length++;
//   }
//   // remove first item
//   shift() {
//     const headNode = this.head;
//     this.head = headNode.next;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = this.head;
//     }
//     this.length--;
//     return headNode;
//   }

//   pop() {
//     if (!this.head) return undefined;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = this.head;
//     } else {
//       let current = this.head;
//       while (current) {
//         if (!current.next.next) {
//           this.tail = current.next;
//           return current.next;
//         }
//       }
//     }
//     this.length--;
//   }
// }

// const LL = new LinkedList();

// LL.push(1);
// LL.push(2);
// LL.push(3);
// LL.pop();
// // LL.shift();
// // LL.shift3);
// // LL.shift();

// // LL.push(3);

// console.log(LL);
