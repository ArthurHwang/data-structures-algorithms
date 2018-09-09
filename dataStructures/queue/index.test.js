const Queue = require('./index')

describe('queue', () => {
  test('it should be an object', () => {
    const queue = new Queue()
    expect(typeof queue).toBe('object')
  })
  test('it should add items to the beginning of a queue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(3)
    queue.enqueue(5)
    expect(queue.first.value).toBe(1)
    expect(queue.last.value).toBe(5)
  })
  test('it should remove items from the beginning of a queue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(3)
    queue.enqueue(5)
    queue.dequeue()
    queue.dequeue()
    expect(queue.first.value).toBe(5)
    expect(queue.last.value).toBe(5)
  })
})
