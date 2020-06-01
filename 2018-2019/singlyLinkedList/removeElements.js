// 203. Remove Linked List Elements
// Easy

// 1283

// 74

// Add to List

// Share
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1 -> 2 -> 3 -> 4 -> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const { SinglyLinkedList } = require('./index.js');

var removeElements = function(head, val) {
  let current = head;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
};

const SLL = new SinglyLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(6);
SLL.push(3);
SLL.push(4);
SLL.push(5);
SLL.push(6);

console.log(removeElements(SLL, 6));
