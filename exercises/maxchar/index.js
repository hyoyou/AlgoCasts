// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let counter = {};

  for (i = 0; i < str.length; i++) {
     if (!counter[str[i]]) {
       counter[str[i]] = 1;
     } else {
       counter[str[i]]++;
     }
  }

  let most_rep = 0;
  let num = 0;

  Object.keys(counter).forEach(function (key) { 
    var value = counter[key]

    if (value > most_rep) {
      most_rep = value
      num = key;
    }
  })

  return num;
}

module.exports = maxChar;
