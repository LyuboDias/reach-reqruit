const check = require('check-types');
('use strict');
/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:

// The bubble sort is a very memory-efficient because all of the ordering occurs within the array or list itself. No new memory is allocated.
// Explain:

module.exports = function sortArray(arr) {
  // checking against null and empty array
  if (arr == null || arr.length == 0) {
    return [];
  }
  // checking if arr empty using check-types
  // if (check.emptyArray(arr)) {
  //   return [];
  // }
  //-----------------------------------------
  // checking against every value in array if different than integer we throw TypeError
  arr.forEach(val => {
    if (check.integer(val) == false) {
      throw TypeError();
    }
  });
  //-----------------------------------------
  // arr.sort((a, b) => a - b);
  // calling srt() to arr should have same behavier as the one bellow but doesnt pass the test
  function sortNumber(a, b) {
    return a - b;
  }
  return arr.sort(sortNumber);
  //-----------------------------------------
  // without using sort() but buble algorithm
  //------------------------------------------
  // function bubbleSort(array) {
  //   let sorted = false;
  //   while (!sorted) {
  //     sorted = true;
  //     for (let i = 1; i < array.length; i += 1) {
  //       if (array[i - 1] > array[i]) {
  //         sorted = false;
  //         let tmp = array[i - 1];
  //         array[i - 1] = array[i];
  //         array[i] = tmp;
  //       }
  //     }
  //   }

  //   return array;
  // }

  // bubbleSort(arr);
  //------------------------------------
};
