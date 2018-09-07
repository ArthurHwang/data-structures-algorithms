const { SinglyLinkedList } = require('./index')

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
  })
  test('it should remove items from the end of list', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.pop()
    expect(list.tail.val).toBe(2)
    expect(list.tail.next).toBe(null)
  })
  test('it should allow deletion of first item in list', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.shift()
    expect(list.head.val).toBe(2)
    expect(list.head.next.val).toBe(3)
  })
})
