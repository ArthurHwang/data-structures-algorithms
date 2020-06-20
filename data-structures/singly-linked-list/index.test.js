const { SinglyLinkedList } = require('./');

let SLL;

beforeEach(() => {
  SLL = new SinglyLinkedList();
});

describe('SinglyLinkedList', () => {
  describe('push', () => {
    test('it should correctly push new values and update tail node', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      expect(SLL.length).toEqual(3);
      expect(SLL.head.val).toEqual(5);
      expect(SLL.tail).toEqual({ val: 7, next: null });
    });
  });
  describe('pop', () => {
    test('it should null tail and head values if popped on empty linked list', () => {
      SLL.push(5);
      SLL.push(1);
      SLL.pop();
      SLL.pop();
      SLL.pop();
      expect(SLL.length).toEqual(0);
      expect(SLL.head).toBeNull();
      expect(SLL.tail).toBeNull();
    });
    test('it should correctly remove the last value and update tail node', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.push(8);
      SLL.push(1);
      SLL.pop();
      expect(SLL.length).toEqual(4);
      expect(SLL.head.val).toEqual(5);
      expect(SLL.tail).toEqual({ val: 8, next: null });
    });
  });
  describe('shift', () => {
    test('it should remove items from the beginning of linked list', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.shift();
      expect(SLL.length).toEqual(2);
      expect(SLL.head.val).toEqual(6);
      expect(SLL.tail.val).toEqual(7);
    });
  });
  describe('unshift', () => {
    test('it should add items to the beginning of linked list', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.unshift(20);
      expect(SLL.length).toEqual(4);
      expect(SLL.head.val).toEqual(20);
      expect(SLL.tail.val).toEqual(7);
    });
    test('it should handle the case when there is no head', () => {
      SLL.unshift(20);
      expect(SLL.length).toEqual(1);
      expect(SLL.head.val).toEqual(20);
      expect(SLL.tail.val).toEqual(20);
    });
  });

  describe('get', () => {
    test('it should get a specific node at the index provided', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.get(1);
      expect(SLL.get(1).val).toEqual(6);
      expect(SLL.get(2).val).toEqual(7);
      expect(SLL.get(0).val).toEqual(5);
    });
  });
  describe('set', () => {
    test('it should update the value of a node at a specific index', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.set('HelloWorld', 1);
      expect(SLL.get(1).val).toEqual('HelloWorld');
    });
  });
  describe('insert', () => {
    test('it should insert a new node at a specific index', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.insert('HelloWorld', 1);
      expect(SLL.get(1).val).toEqual('HelloWorld');
    });
  });
  describe('remove', () => {
    test('it should remove a node at a specific index', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.remove(1);
      expect(SLL.get(1).val).toEqual(7);
    });
  });
  describe('reverse', () => {
    test('it should reverse the linked list', () => {
      SLL.push(5);
      SLL.push(6);
      SLL.push(7);
      SLL.push(8);
      SLL.push(9);
      SLL.reverse();
      expect(SLL.get(0).val).toEqual(9);
      expect(SLL.get(1).val).toEqual(8);
      expect(SLL.get(2).val).toEqual(7);
      expect(SLL.get(3).val).toEqual(6);
    });
  });
});
