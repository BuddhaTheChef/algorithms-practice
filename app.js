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
//                                 reversed integer

// function reverseInt(n) {
//
//   const reversed = n.toString().split('').reverse().join('');
//   //math sign returns numbeer if it is negative or positive
//   return parseInt(reversed) * Math.sign(n);
// }

///////////////////////////////////////////////////////////////////////////////////////////////
//                             letter most used in a string

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for(let char of str) {
    if(charMap[char]) {
      charMap[char]++;
    }
    else {
      charMap[char] = 1;
    }
  }
  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                       FizzBuzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    }
    else if(i % 3 === 0){
      console.log('fizz')
    }
    else if(i % 5 === 0){
      console.log('buzz')
    }
    else{
      console.log(i);
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////
//                                    Array Chunking

// Solution 1
function chunk(array, size) {
  let chunked = [];

  for(let element of array) {
    let last = chunked[chunked.length - 1];

    if(!last || last.length === size) {
      chunked.push([element]);
    }
    else {
      last.push(element)
    }
  }
  return chunked;
}

// Solution 2

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                       Anagrams

// Solution 1
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// Solution 2

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
