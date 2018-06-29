// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let strArr = str.split('')

  for (i = 0; i < strArr.length/2; i++) {
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false
    } else {
      return true
    }
  }
}

module.exports = palindrome;


// My Solution
// let reversed = str.split('').reverse().join('');
//
// if (reversed === str) {
//   return true
// } else {
//   return false
// }

// Solution #1
// const reversed = str.split('').reverse().join('');
//
// return (reversed === str)

// Solution #2
// return str.split('').every((char, i) => {
//   return char === str[str.length - i -1];
// });
