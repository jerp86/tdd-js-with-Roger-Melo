import { typeErrorMessage } from './utils';

const getFactorial = number => {
  if (typeof number !== 'number') {
    throw new TypeError(typeErrorMessage)
  }

  if (number < 0 || number > 20) {
    throw new RangeError();
  }

  if (number === 1 || number === 0) {
    return 1;
  }

  return number * getFactorial(number - 1);
};

export default getFactorial;
