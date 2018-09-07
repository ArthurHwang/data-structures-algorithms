const SinglyLinkedList = require('./index')

describe('SinglyLinkedList', () => {
  test('it should be an object', () => {
    const list = new SinglyLinkedList()
    expect(typeof list).toEqual('object')
  })
  test('it should add new values', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    expect(list.head.val).toBe(1)
    expect(list.head).not.toBe(null)
    expect(list.length).toEqual(1)
  })
  test('it should remove items from the end of list', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.pop()
    expect(list.tail.val).toBe(2)
    expect(list.tail.next).toBe(null)
    expect(list.length).toEqual(2)
  })
  test('it should allow deletion of first item in list', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.shift()
    expect(list.head.val).toBe(2)
    expect(list.head.next.val).toBe(3)
    expect(list.length).toEqual(2)
  })
  test('it should allow insertion of first item in list', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.unshift(0)
    expect(list.head.val).toBe(0)
    expect(list.head.next.val).toBe(1)
    expect(list.length).toEqual(4)
  })
})
