const { BinarySearchTree } = require('./');

let BST;

beforeEach(() => {
  BST = new BinarySearchTree();
  BST.insert(5);
  BST.insert(7);
  BST.insert(6);
  BST.insert(3);
  BST.insert(4);
  BST.insert(20);
  BST.insert(1);
});

describe('DoublyLinkedList', () => {
  describe('insert', () => {
    test('it should correctly insert values', () => {
      expect(BST.root.value).toEqual(5);
      expect(BST.root.left.value).toEqual(3);
      expect(BST.root.right.value).toEqual(7);
    });
  });
  describe('find', () => {
    test('it should find and return input node', () => {
      expect(BST.find(5)).toEqual(5);
      expect(BST.find(20)).toEqual(20);
      expect(BST.find(3)).toEqual(3);
      expect(BST.find(556)).toBeNull();
    });
  });
  describe('contains', () => {
    test('it should return true or false if node exists in tree', () => {
      expect(BST.contains(5)).toEqual(true);
      expect(BST.contains(20)).toEqual(true);
      expect(BST.contains(3)).toEqual(true);
      expect(BST.contains(556)).toEqual(false);
    });
  });
  describe('Breadth First Search', () => {
    test('it should correctly visit all nodes breadth', () => {
      expect(BST.BFS()).toEqual([5, 3, 7, 1, 4, 6, 20]);
    });
  });
  describe('Depth First Search PreOrder', () => {
    test('it should correctly visit all nodes PreOrder', () => {
      expect(BST.DFSPreOrder()).toEqual([5, 3, 1, 4, 7, 6, 20]);
    });
  });
  describe('Depth First Search InOrder', () => {
    test('it should correctly visit all nodes InOrder', () => {
      expect(BST.DFSInOrder()).toEqual([1, 3, 4, 5, 6, 7, 20]);
    });
  });
  describe('Depth First Search PostOrder', () => {
    test('it should correctly visit all nodes PostOrder', () => {
      expect(BST.DFSPostOrder()).toEqual([1, 4, 3, 6, 20, 7, 5]);
    });
  });
});
