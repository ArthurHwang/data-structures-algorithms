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
  test('it should allow search and return of a node', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.search(10).value).toBe(10)
    expect(BST.search(1000)).toBe(null)
  })
  test('it should true or false if the tree contains the node', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.contains(10)).toBe(true)
    expect(BST.contains(1000)).toBe(false)
  })
})

describe('Breadth First Search', () => {
  test('it should be a function', () => {
    const BST = new BinarySearchTree()
    expect(typeof BST.BFS).toBe('function')
  })
  test('it should return an array with all visited nodes in specific order', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.BFS()[2].value).toBe(40)
  })
})

describe('Depth First Search Preorder', () => {
  test('it should be a function', () => {
    const BST = new BinarySearchTree()
    expect(typeof BST.DFSPreorder).toBe('function')
  })
  test('it should return an array with all visited nodes in specific order', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.DFSPreorder()[2].value).toBe(40)
  })
})

describe('Depth First Search Postorder', () => {
  test('it should be a function', () => {
    const BST = new BinarySearchTree()
    expect(typeof BST.DFSPostorder).toBe('function')
  })
  test('it should return an array with all visited nodes in specific order', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    expect(BST.DFSPostorder()[1].value).toBe(90)
  })
})

describe('Depth First Search Inorder', () => {
  test('it should be a function', () => {
    const BST = new BinarySearchTree()
    expect(typeof BST.DFSInorder).toBe('function')
  })
  test('it should return an array with all visited nodes in specific order', () => {
    const BST = new BinarySearchTree()
    BST.insert(100)
    BST.insert(0)
    BST.insert(40)
    BST.insert(90)
    BST.insert(10)
    console.log(BST)
    expect(BST.DFSInorder()[1].value).toBe(10)
  })
})
