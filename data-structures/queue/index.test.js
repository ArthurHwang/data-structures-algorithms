const { Queue } = require('./');

let queue;

beforeEach(() => {
  queue = new Queue();
});

describe('Queue', () => {
  describe('enqueue', () => {
    test('it should correctly enqueue new items', () => {
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      expect(queue.head).toEqual(0);
    });
    test('it should correctly dequeue items', () => {
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      queue.dequeue();
      queue.dequeue();
      expect(queue.head).toEqual(2);
    });
  });
});
