const { isValid } = require('./index');

describe('isValid', () => {
  test('it should return false if string input is not of even length', () => {
    expect(isValid('{}}')).toEqual(false);
  });
  test('it should return false if input is not of string type', () => {
    expect(isValid(['hello'])).toEqual(false);
  });
  test('it should return true if parens are valid', () => {
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('({})')).toEqual(true);
  });
});
