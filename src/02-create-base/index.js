// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function createBase(integer) {
  //~TODO  save integer as base depend on  what function is called

  let base = integer;
  let addTen = function (n) {
    return n + base;
  };
  let subtractTwenty = function (n) {
    return n - base;
  };
  return addTen, subtractTwenty;
};
