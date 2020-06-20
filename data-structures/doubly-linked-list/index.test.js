const { DoublyLinkedList } = require('./');

let DLL;

beforeEach(() => {
  DLL = new DoublyLinkedList();
});

describe('DoublyLinkedList', () => {
  describe('push', () => {
    test('it should correctly push new values and update tail node', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      expect(DLL.length).toEqual(3);
      expect(DLL.head.val).toEqual(5);
      expect(DLL.tail).toEqual({ val: 7, next: null });
    });
  });
});
