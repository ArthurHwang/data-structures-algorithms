const { Stack } = require('./');

let stack;

beforeEach(() => {
  stack = new Stack();
});

describe('Stack', () => {
  describe('push', () => {
    test('it should push items on the stack', () => {
      stack.push(5);
      stack.push(6);
      stack.push(7);
      expect(stack.size).toEqual(3);
    });
  });
  describe('pop', () => {
    test('it should correctly pop items from the stack', () => {
      stack.push(5);
      stack.push(6);
      stack.push(7);
      expect(stack.pop()).toEqual(7);
    });
  });
  describe('peek', () => {
    test('it should correctly peek the top item on the stack', () => {
      stack.push(5);
      stack.push(6);
      stack.push(7);
      expect(stack.peek()).toEqual(7);
    });
  });
});
