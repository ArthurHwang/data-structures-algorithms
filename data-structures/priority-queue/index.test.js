const { PriorityQueue } = require('./');

let PQ;

beforeEach(() => {
  PQ = new PriorityQueue();
  PQ.enqueue(0, 0);
  PQ.enqueue(1, 2);
  PQ.enqueue(3, 3);
  PQ.enqueue(4, 4);
  PQ.enqueue(5, 5);
});

describe('Priority Queue', () => {
  describe('enqueue', () => {
    test('it should correctly enqueue values based on priority', () => {
      expect(PQ.values[0].value).toEqual(5);
    });
  });
  describe('enqueue', () => {
    test('it should correctly dequeue the top priority node', () => {
      expect(PQ.dequeue().value).toEqual(5);
      expect(PQ.dequeue().value).toEqual(4);
    });
  });
});
