// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let strArr = str.split('');

  for (i = 0; i < strArr.length/2; i++) {
    let temp = strArr[i];
    strArr[i] = strArr[strArr.length - i - 1];
    strArr[strArr.length - i - 1] = temp
  }

  return strArr.join('');
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
