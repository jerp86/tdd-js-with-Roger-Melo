const getFactorial = number => {
  if (typeof number !== 'number') {
    throw new TypeError('getFactorial should receive a number as argument')
  }

  if (number === 1) {
    return 1;
  }

  return number * getFactorial(number - 1);
};

export default getFactorial;
