// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function createBase(integer) {
  if (integer) {
    const addTen = function (n) {
      return n + integer;
    };
    return addTen;
  }
};
