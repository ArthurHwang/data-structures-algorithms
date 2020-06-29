/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports.middleNode = (head) => {
  if (!head) return null;

  let fast = head;
  let slow = head;

  while (fast !== null) {
    if (fast.next === null) {
      fast = null;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
  }

  return slow;
};
