import { typeErrorMessage, rangeErrorMessage } from './utils';

const getFactorial = number => {
  const isNotNumber = typeof number !== 'number';
  if (isNotNumber) {
    throw new TypeError(typeErrorMessage)
  }

  if (number < 0 || number > 20) {
    throw new RangeError(rangeErrorMessage);
  }

  if (number === 1 || number === 0) {
    return 1;
  }

  return number * getFactorial(number - 1);
};

export default getFactorial;
