/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain: Iterating, copying and reversing an array takes linear time O(n), if we don't intend to do  O(n)  accesses to the reversed array we can create "reversed_array" object taht takes array as an argument,all we do is override the usual array accessing or slicing methods to replace any index  i  with the index  n - i. This wrapper methodology saves a one-time O(n) task and replaces it by  O(1)

module.exports = function reverseWordsInSentence(input) {
  //return direct the input with chained all methods together
  return input.split('').reverse().join('').split(' ').reverse().join(' ');
  // another way to do is if we input.split(' ') than we .map() over every single word, split('') to separate chars and reverse() them than join('') back to separate words adn jpon(' ') again to a whole string
};
