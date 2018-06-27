// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// Solution #1:
// return str.split('').reverse().join('');

// Solution #2:
// let reversed = '';
//
// for (let char of str) {
//   reversed = char + reversed;
// }
//
// return reversed;

// Solution #3:
// return str.split('').reduce((reversed, character) => {
//   return character + reversed;
// }, '');
