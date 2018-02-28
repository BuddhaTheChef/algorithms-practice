///////////////////////////////////////////////////////////////////////////////////////////////
//                                  reverse a string

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

///////////////////////////////////////////////

function reverse(str) {
  str = str.split('').reverse().join('')
  return str;
}

///////////////////////////////////////////////

function reverse(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

/////////////////////////////////////////////////////////////////////////////////////////////
                                     Palindrome

function palindrome(str) {
return str.split('').every((char, index) => {
  return char === str[str.length - index - 1];
});
}

///////////////////////////////////////////////

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

/////////////////////////////////////////////////////////////////////////////////////////////
                                reversed integer

function reverseInt(n) {

  const reversed = n.toString().split('').reverse().join('');
  //math sign returns numbeer if it is negative or positive
  return parseInt(reversed) * Math.sign(n);
}

///////////////////////////////////////////////////////////////////////////////////////////////
                             letter most used in a string

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
//                              Making a queue(data structure)

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove(record) {
    return this.data.pop();
  }
}





///////////////////////////////////////////////////////////////////////////////////////////////
//                            Weave(data Structure) "QUEUE"
//     ./queue
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length -1]
  }
}


// index.js
const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}

////////////////////////////////////////////////////////////////////////////////////////////////
//                            Queue(Stack) "Data sturcture"


class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop(record) {
    return this.data.pop();
  }

  peek(record) {
    return this.data[this.data.length -1];
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                            Data structue "Common Example"

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while(this.first.peek()) {
      this.second.push(this.first.pop())
    }

    const record = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                Linked List Example


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data){
    this.head = new Node(data, this.head);
  }
  size(){
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while(node) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
  this.head = null;
  }
  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if(!this.head) {
      return;
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();

  if(last) {
    //there is some exiting nodes in our chain
    last.next = new Node(data);
    } else {
    //the chain is empty
    this.head = new Node(data);
    }
  }
  getAt(index) {
  if(!this.head) {
    return null;
  }
  let counter = 0;
  let node = this.head;
  while(node) {
    if (counter === index) {
      return node;
    }
    counter++
    node = node.next;
  }
  return null;
}
removeAt(index) {
  if(!this.head) {
    return;
  }
  if(index === 0) {
    this.head = this.head.next;
    return;
  }
  const previous = this.getAt(index - 1);
  if(!previous || !previous.next) {
    return;
  }
  previous.next = previous.next.next;
}
insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index -1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                         Fast and slow Linked list example

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                        Circular linked list fast and slow

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) {
      return true;
    }
  }
  return false;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                           From last linkedList examples

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while(n > 0) {
    fast = fast.next;
    n--;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                  Tree Structures

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      //for(let child of node.children) {
      //  arr.push(child);
      //  }
      //or
      arr.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                example of BF traversal

function levelWidth(root) {
  const counters = [0];
  const arr = [root,'s'];

  while(arr.length > 1) {
    const node = arr.shift();

    if(node === 's') {
      counters.push(0);
      arr.push('s');
    }
    else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                Binary Search Tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if(data < this.data && this.left) {
      this.left.insert(data);
    } else if(data < this.data) {
      this.left = new Node(data);
    } else if(data > this.data && this.right) {
      this.right.insert(data);
    } else if(data > this.data) {
      this.right = new Node(data);
    }
  }
  contains(data) {
    if(this.data === data) {
      return this;
    }
    if(this.data < data && this.right) {
      return this.right.contains(data);
    } else if(this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                              Binary tree with recursion

function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) {
    return false;
  }
  if(min !== null && node.data < min) {
    return false;
  }
  if(node.left && !validate(node.left,min,node.data)) {
    return false;
  }

  if(node.right && !validate(node.right,node.data,max)) {
    return false;
  }
  return true;
}


///////////////////////////////////////////////////////////////////////////////////////////////
//                            Creating an events libary

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback);
    }
    else {
      this.events[eventName] = [callback];
    }
  }
  // Trigger all callbacks associated
// with a given eventName
trigger(eventName) {
  if(this.events[eventName]) {
    for(let cb of this.events[eventName]) {
      cb();
    }
  }
}

// Remove all event handlers associated
// with the given eventName
off(eventName) {
  delete this.events[eventName];
}
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                  Bubble Sorting

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++) {
      if(arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                 Selection sort

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                  merge function

function merge(left, right) {
  const results = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
 }

///////////////////////////////////////////////////////////////////////////////////////////////
//                               merge sort function

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length/ 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

///////////////////////////////////////////////////////////////////////////////////////////////
