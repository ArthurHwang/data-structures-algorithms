const { LinkedList } = require('./');

describe('LinkedList', () => {
  describe('push', () => {
    test('it should correctly push new values and update tail node', () => {
      const LL = new LinkedList();
      LL.push(5);
      LL.push(6);
      LL.push(7);
      expect(LL.length).toEqual(3);
      expect(LL.head.val).toEqual(5);
      expect(LL.tail).toEqual({ val: 7, next: null });
    });
  });
  describe('pop', () => {
    test('it should null tail and head values if popped on empty linked list', () => {
      const LL = new LinkedList();
      LL.push(5);
      LL.push(1);
      LL.pop();
      LL.pop();
      LL.pop();
      expect(LL.length).toEqual(0);
      expect(LL.head).toBeNull();
      expect(LL.tail).toBeNull();
    });
    test('it should correctly remove the last value and update tail node', () => {
      const LL = new LinkedList();
      LL.push(5);
      LL.push(6);
      LL.push(7);
      LL.push(8);
      LL.push(1);
      LL.pop();
      expect(LL.length).toEqual(4);
      expect(LL.head.val).toEqual(5);
      expect(LL.tail).toEqual({ val: 8, next: null });
    });
  });
});
