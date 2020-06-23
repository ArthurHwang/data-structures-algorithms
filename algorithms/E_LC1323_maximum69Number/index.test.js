const { maximum69Number } = require('./index');

describe('maximum69Number', () => {
  test('it should return undefined if input is not of type number', () => {
    expect(maximum69Number('')).toEqual(undefined);
  });
  test('it should return the correct maximum number output', () => {
    expect(maximum69Number(9669)).toEqual(9969);
    expect(maximum69Number(9996)).toEqual(9999);
    expect(maximum69Number(9999)).toEqual(9999);
  });
});
