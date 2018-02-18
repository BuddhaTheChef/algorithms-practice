///////////////////////////////////////////////////////////////////////////////////////////////
//                                  reverse a string

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

/////////////////////////////////////////////////

// function reverse(str) {
//   str = str.split('').reverse().join('')
//   return str;
// }

/////////////////////////////////////////////////

// function reverse(str) {
//   let reversed = '';
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

///////////////////////////////////////////////////////////////////////////////////////////////
//                                      Palindrome

// function palindrome(str) {
// return str.split('').every((char, index) => {
//   return char === str[str.length - index - 1];
// });
// }

/////////////////////////////////////////////////

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//
//   return str === reversed;
// }

///////////////////////////////////////////////////////////////////////////////////////////////
