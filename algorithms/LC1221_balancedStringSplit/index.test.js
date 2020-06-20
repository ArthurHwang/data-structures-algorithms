const { balancedStringSplit } = require('./index');

describe('balancedStringSplit', () => {
  test('it should return undefined if input string is empty', () => {
    expect(balancedStringSplit('')).toEqual(undefined);
  });
  test('it should return undefined input type is not a string datatype', () => {
    expect(balancedStringSplit(5)).toEqual(undefined);
  });
  test('it should return the correct output', () => {
    expect(balancedStringSplit('RLLLLRRRLR')).toEqual(3);
  });
});
