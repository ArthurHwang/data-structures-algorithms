const Stack = require('./index')

describe('Stack', () => {
  test('it should be an object', () => {
    const stack = new Stack()
    expect(typeof stack).toBe('object')
  })
  test('it should add items to the beginning of a stack', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(3)
    stack.push(5)
    expect(stack.first.value).toBe(5)
    expect(stack.last.value).toBe(1)
  })
  test('it should remove items from the beginning of a stack', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(3)
    stack.push(5)
    stack.pop()
    stack.pop()
    expect(stack.first.value).toBe(1)
    expect(stack.last.value).toBe(1)
  })
})
