import getFactorial from './factorial';

test('getFactorial should be a function', () => {
  expect(getFactorial).toBeInstanceOf(Function);
});
