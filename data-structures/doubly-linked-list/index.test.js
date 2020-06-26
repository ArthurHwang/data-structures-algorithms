// const { DoublyLinkedList } = require('./');
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
      console.log(DLL);
      expect(DLL.length).toEqual(3);
      expect(DLL.head.val).toEqual(5);
      expect(DLL.tail.val).toEqual(7);
    });
  });
  describe('pop', () => {
    test('it should remove the tail node and update tail pointer', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.pop();
      expect(DLL.tail.val).toEqual(6);
      expect(DLL.tail.next).toBeNull();
    });
    test('it should set tail and head to be null if only 1 item in list', () => {
      DLL.push(5);
      DLL.pop();
      expect(DLL.head).toBeNull();
      expect(DLL.tail).toBeNull();
    });
  });
  describe('shift', () => {
    test('it should correctly remove the first item in the list', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.shift();
      expect(DLL.length).toEqual(2);
      expect(DLL.head.val).toEqual(6);
      expect(DLL.tail.val).toEqual(7);
    });
    test('it should set tail and head to be null if only 1 item in list', () => {
      DLL.push(5);
      DLL.pop();
      expect(DLL.head).toBeNull();
      expect(DLL.tail).toBeNull();
    });
  });
  describe('unshift', () => {
    test('it should add a new node to the beginning of list', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.unshift(4);
      expect(DLL.head.val).toEqual(4);
      expect(DLL.tail.val).toEqual(6);
    });
    test('it should correctly insert new node if list is empty', () => {
      DLL.unshift(5);
      expect(DLL.head.val).toEqual(5);
      expect(DLL.tail.val).toEqual(5);
    });
  });
  describe('get', () => {
    test('it should get and return the correct node at specified index', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      expect(DLL.get(0).val).toEqual(5);
      expect(DLL.get(1).val).toEqual(6);
      expect(DLL.get(2).val).toEqual(7);
    });
  });
  describe('set', () => {
    test('it should find and update node value at given index', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.set(1, 'Hello');
      expect(DLL.length).toEqual(3);
      expect(DLL.get(1).val).toEqual('Hello');
    });
  });
  describe('insert', () => {
    test('it should insert a new node at given index', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.insert(1, 'Hello');
      DLL.insert(0, 'HelloToYou');
      expect(DLL.length).toEqual(5);
      expect(DLL.get(1).val).toEqual(5);
      expect(DLL.get(0).val).toEqual('HelloToYou');
    });
  });
  describe('remove', () => {
    test('it should correctly remove node at given index', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.remove(1);
      expect(DLL.length).toEqual(2);
      expect(DLL.get(1).val).toEqual(7);
    });
    test('it should correctly remove node at the end and beginning of list', () => {
      DLL.push(5);
      DLL.push(6);
      DLL.push(7);
      DLL.remove(0);
      DLL.remove(2);
      expect(DLL.length).toEqual(1);
      expect(DLL.get(0).val).toEqual(6);
    });
  });
});
