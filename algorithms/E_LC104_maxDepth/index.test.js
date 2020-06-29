const { maxDepthBFS, maxDepthDFS } = require('.');
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

describe('maxDepthBFS', () => {
  test('it should return undefined if input is not an Array', () => {
    const BST = new BinarySearchTree();
    expect(maxDepthBFS(BST.root)).toEqual(0);
  });
  test('it should return BFS max depth of tree', () => {
    expect(maxDepthBFS(BST.root)).toEqual(3);
  });
});
// describe('maxDepthDFS', () => {
//   test('it should return undefined if input is not an Array', () => {
//     const BST = new BinarySearchTree();
//     expect(maxDepthDFS(BST.root)).toEqual(0);
//   });
//   test('it should return DFS max depth of tree', () => {
//     expect(maxDepthDFS(BST.root)).toEqual(3);
//   });
// });
