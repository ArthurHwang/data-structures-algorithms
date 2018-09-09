const BinarySearchTree = require('./index')

describe('BinarySearchTree', () => {
  test('it should be an object', () => {
    const BST = new BinarySearchTree()
    expect(typeof BST).toBe('object')
  })
  test('it should allow insertion into the tree', () => {
    const BST = new BinarySearchTree()
    BST.insert(20)
    BST.insert(0)
    BST.insert(40)
    expect(BST.root.value).toBe(20)
    expect(BST.root.left.value).toBe(0)
    expect(BST.root.right.value).toBe(40)
  })
  test('it should allow search of the tree', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.search(10)).toBe(true)
    expect(BST.search(1000)).toBe(false)
  })
})
