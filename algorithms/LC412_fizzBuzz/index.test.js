const { fizzBuzz } = require('./index');

describe('fizzBuzz', () => {
  test('it should return undefined if n is zero or less', () => {
    expect(fizzBuzz(0)).toStrictEqual(undefined);
    expect(fizzBuzz(-1)).toStrictEqual(undefined);
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
