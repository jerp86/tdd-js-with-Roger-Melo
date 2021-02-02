const getFactorial = number => {
  if (typeof number !== 'number') {
    throw new TypeError()
  }

  if (number === 1) {
    return 1;
  }

  return number * getFactorial(number - 1);
};

export default getFactorial;
