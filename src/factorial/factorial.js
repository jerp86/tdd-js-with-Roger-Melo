import { typeErrorMessage } from './utils';

const getFactorial = number => {
  if (typeof number !== 'number') {
    throw new TypeError(typeErrorMessage)
  }

  if (number < 0 || number > 20) {
    throw new RangeError('getFactorial should receive a number between 0 and 20 as argument');
  }

  if (number === 1 || number === 0) {
    return 1;
  }

  return number * getFactorial(number - 1);
};

export default getFactorial;
