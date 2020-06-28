const { MaxBinaryHeap } = require('./');

let MBH;

beforeEach(() => {
  MBH = new MaxBinaryHeap();
  MBH.insert(41);
  MBH.insert(39);
  MBH.insert(33);
  MBH.insert(18);
  MBH.insert(27);
  MBH.insert(12);
  MBH.insert(55);
});

describe('Max Binary Heap', () => {
  describe('insert', () => {
    test('it should correctly insert values and bubble up max value', () => {
      expect(MBH.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
    });
  });
  describe('extractMax', () => {
    test('it should correctly remove root value and bubble down temp root', () => {
      expect(MBH.extractMax()).toEqual(55);
      expect(MBH.extractMax()).toEqual(41);
      expect(MBH.extractMax()).toEqual(39);
    });
  });
});
