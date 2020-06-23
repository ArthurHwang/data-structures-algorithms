const { fizzBuzz } = require('.');

describe('fizzBuzz', () => {
  test('it should return undefined if n is zero or less', () => {
    expect(fizzBuzz(0)).toStrictEqual(undefined);
    expect(fizzBuzz(-1)).toStrictEqual(undefined);
  });
  test('it should return undefined if input type is not a number', () => {
    expect(fizzBuzz('hi')).toStrictEqual(undefined);
    expect(fizzBuzz([1, 2, 3])).toStrictEqual(undefined);
    expect(fizzBuzz({ a: 'hello' })).toStrictEqual(undefined);
  });

  test('it should return the correct pattern', () => {
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      'FIZZ',
      4,
      'BUZZ',
      'FIZZ',
      7,
      8,
      'FIZZ',
      'BUZZ',
      11,
      'FIZZ',
      13,
      14,
      'FIZZBUZZ',
    ]);
  });
});
