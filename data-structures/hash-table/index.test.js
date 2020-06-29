// const { DoublyLinkedList } = require('./');
const { HashTable } = require('./');

let HT;

beforeEach(() => {
  HT = new HashTable();
  HT.set('hello, world', 'goodbye!!');
  HT.set('hello', 'good');
  HT.set('white', '#FFF');
  HT.set('black', '#000');
});

describe('HashTable', () => {
  describe('set', () => {
    test('it should correctly hash keys and insert into hash table', () => {
      HT.set('red', '#FF0000');
      expect(HT.get('red')).toEqual('#FF0000');
    });
  });
  describe('get', () => {
    test('it should correctly retrieve correct key after hashing', () => {
      expect(HT.get('black')).toEqual('#000');
    });
  });
  describe('values', () => {
    test('it should return unique hash table values', () => {
      expect(HT.values()).toEqual(['#FFF', '#000', 'goodbye!!', 'good']);
    });
  });
  describe('keys', () => {
    test('it should return unique hash table keys', () => {
      expect(HT.keys()).toEqual(['white', 'black', 'hello, world', 'hello']);
    });
  });
});
