const { rangeSumBSTbFS, rangeSumBSTdFS } = require('./index');
const {
  BinarySearchTree,
} = require('../../data-structures/binary-search-tree');

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

describe('rangeSumBST Breadth First Search', () => {
  test('it should return 0 if no root node is supplied', () => {
    expect(rangeSumBSTbFS()).toEqual(0);
  });

  test('it should return the correct sum of nodes in correct range', () => {
    expect(rangeSumBSTbFS(BST.root, 7, 15)).toEqual(7);
  });
});
describe('rangeSumBST Depth First Search', () => {
  test('it should return 0 if no root node is supplied', () => {
    expect(rangeSumBSTdFS()).toEqual(0);
  });

  test('it should return the correct sum of nodes in correct range', () => {
    expect(rangeSumBSTdFS(BST.root, 7, 15)).toEqual(7);
  });
});
