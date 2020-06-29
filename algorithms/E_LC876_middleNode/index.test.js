const { middleNode } = require('.');
const {
  SinglyLinkedList,
} = require('../../data-structures/singly-linked-list/');

let SLL;

beforeEach(() => {
  SLL = new SinglyLinkedList();
  SLL.push(1);
  SLL.push(3);
  SLL.push(4);
  SLL.push(5);
  SLL.push(6);
  SLL.push(7);
  SLL.push(20);
});

describe('middleNode', () => {
  test('it should return null if no head', () => {
    expect(middleNode()).toBeNull();
  });
  test('it should return the correct middle node of Linked List', () => {
    expect(middleNode(SLL.head).val).toEqual(5);
  });
});
