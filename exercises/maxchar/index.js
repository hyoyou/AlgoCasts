// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxChar = '';
  let max = 0;
  
  for (i = 0; i < str.length; i++) {
    if (!charMap[str[i]]) {
      charMap[str[i]] = 1;
    } else {
      charMap[str[i]]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  
  return maxChar
}

module.exports = maxChar;

// Solution #1:
// const charMap = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//   if (charMap[char]) {
//     charMap[char]++;
//   } else {
//     charMap[char] = 1;
//   }
// }

// for (let char in charMap) {
//   if (charMap[char] > max) {
//     max = charMap[char];
//     maxChar = char;
//   }
// }

// return maxChar;

// Solution #2:
// let counter = {};

// for (i = 0; i < str.length; i++) {
//    if (!counter[str[i]]) {
//      counter[str[i]] = 1;
//    } else {
//      counter[str[i]]++;
//    }
// }

// let most_rep = 0;
// let num = 0;

// Object.keys(counter).forEach(function (key) { 
//   var value = counter[key]

//   if (value > most_rep) {
//     most_rep = value
//     num = key;
//   }
// })

// return num;
