const { decryptString } = require('./index');

describe('decryptString', () => {
  test('it should return undefined if input string is empty', () => {
    expect(decryptString('')).toEqual(undefined);
  });
  test('it should return undefined input type is not a string datatype', () => {
    expect(decryptString(5)).toEqual(undefined);
  });
  test('it should return the correct output', () => {
    expect(decryptString('10#11#12')).toEqual('jkab');
    expect(decryptString('1326#')).toEqual('acz');
    expect(decryptString('25#')).toEqual('y');
  });
});
