/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function reverseWordsInSentence(input) {
  //return direct the input with chained all methods together
  return input.split('').reverse().join('').split(' ').reverse().join(' ');
  // another way to do is if we input.split(' ') than we .map() over every single word, split('') to separate chars and reverse() them than join('') back to separate words adn jpon(' ') again to a whole string
};
