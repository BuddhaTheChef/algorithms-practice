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
//                            Sentence Capitalization

//  Solution 1
function capitalize(str) {
  const words = [];
  for(let word of str.split(' ')) {
  words.push(word[0].toUpperCase() + word.slice(1))
  }
  return words.join(' ')
}

//  Solution 2
function capitalize(str) {
  let result = str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    if(str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    }
    else {
      result += str[i];
    }
  }
  return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////
//                                      Steps

//  Solution 1
function steps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';
    for(let column = 0; column < n; column++) {
      if(column <= row) {
        stair += '#';
      }
      else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

//  Solution 2

function steps(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return
  }

  if(stair.length <= row) {
    stair += '#';
  }
  else {
    stair += ' ';
  }

  steps(n, row, stair);

}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                     Pyramid

//  Solution 1
function pyramid(n) {
  const midpoint = Math.floor((2 * n -1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++){
      if(midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      }
      else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

// Solution 2

function pyramid(n, row = 0, level = '') {
  if(n === row) {
    return;
  }
  if(level.length === 2 * n - 1){
    console.log(level);
    return pyramid(n, row + 1);
  }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
  if(midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  }
  else {
    add = ' ';
  }
  pyramid(n, row, level + add)
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                      VOWELS

//  Solution 1

function vowels(str) {
  let count = 0;
  const check = ['a','e','i','o','u'];

  for(let char of str.toLowerCase()) {
    if(check.includes(char)) {
      count++;
    }
  }
  return count;
}

//  Solution 2

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                   Matrix Spiral

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
}

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    //Top Row
    for(let i = startColumn; i <= endColumn; i++) {
    results[startRow][i] = counter;
    counter++;
  }
  startRow++

  //right column
  for(let i = startRow; i <= endRow; i++) {
    results[i][endColumn] = counter;
    counter++;
  }
  endColumn--;

  //Bottom Row
  for(let i = endColumn; i >= startColumn; i--) {
    results[endRow][i] = counter;
    counter++;
  }
  endRow--;

  //Start Column
  for(let i = endRow; i >= startRow; i--) {
    results[i][startColumn] = counter;
    counter++;
  }
  startColumn++;
}
return results;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//                                    Fibonacci

//  Solution 1
function fib(n) {
  const result = [0,1];
  for(var i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
}

//  Solution 2

function fib(n) {
  if(n < 2) {
    return n;
  }
  return fib(n-1) + fib(n - 2);
}


// Optomized version using memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if(n < 2) {
    return n;
  }
  return fib(n-1) + fib(n - 2);
}

const fib = memoize(slowFib);

///////////////////////////////////////////////////////////////////////////////////////////////
//





///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
