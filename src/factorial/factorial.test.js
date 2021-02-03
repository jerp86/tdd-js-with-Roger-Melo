import getFactorial from './factorial';
import { typeErrorMessage } from './utils';

describe('Happy Path', () => {
  test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function);
  });
  
  test('getFactorial(3) should return 6', () => {
    const actual = getFactorial(3);
    const expected = 6;
  
    expect(actual).toBe(expected);
  });
  
  test('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4);
    const expected = 24;
  
    expect(actual).toBe(expected);
  });
});

describe('Unhappy Path', () => {
  test('getFactorial() should throw a TypeError', () => {
    try {
      getFactorial();
    } catch ({ name }) {
      expect(name).toBe('TypeError');
    }
  });

  test(`getFactorial() should throw a TypeError with message "${typeErrorMessage}"`, () => {
    try {
      getFactorial();
    } catch ({ message }) {
      expect(message).toBe(typeErrorMessage);
    }
  });

  test('getFactorial(0) should return 1', () => {
    const actual = getFactorial(0);
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('getFactorial(-1) should throw a RangeError', () => {
    try {
      getFactorial(-1);
    } catch ({ name }) {
      expect(name).toBe('RangeError');
    }
  });

  test('getFactorial(-1) should throw a RangeError with message "getFactorial should receive a number between 0 and 20 as argument"', () => {
    try {
      getFactorial(-1);
    } catch ({ message }) {
      expect(message).toBe('getFactorial should receive a number between 0 and 20 as argument');
    }
  });
});
