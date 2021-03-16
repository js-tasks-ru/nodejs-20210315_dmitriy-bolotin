function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError(`One of params is not a number!`);
  }
  
  return a + b;
}

module.exports = sum;
