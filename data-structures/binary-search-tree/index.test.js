const { BinarySearchTree } = require('./');

let BST;

beforeEach(() => {
  BST = new BinarySearchTree();
});

describe('DoublyLinkedList', () => {
  describe('push', () => {
    test('it should correctly push new values and update tail node', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      expect(DLL.length).toEqual(3);
      expect(DLL.head.val).toEqual(5);
      expect(DLL.tail.val).toEqual(7);
    });
  });
});
