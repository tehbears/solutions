//====================================================Warm Ups

// What does map do? Discuss with your partner until you are confident that you understand the purpose of the map abstraction. Try to describe what map does, not how it does what it does.

// Read and experiment with the code below to figure out what it does and how it works.
function each(coll, f){
  if(Array.isArray(coll)){
    for(var i = 0; i < coll.length; i++){
      f(coll[i], i);
    }
  } else {
    for(var key in coll){
      f(coll[key], key);
    }
  }
}

function map(coll, f){
  var acc = [];
  acc.push(each(coll, f));
  return acc;
}

var coordinates = [
  [1, 2],
  [4, -2],
  [5, 4],
  [0, 7],
  [-1, 1]
];

function coordinatesToObjects(coordinates) {
  var objects = [];
  each(coordinates, function(coord) {
    objects.push({
      x: coord[0],
      y: coord[1]
    });
  });
  return objects;
}

console.log('Coordinates without map:' ,coordinatesToObjects(coordinates)); // => ?

// Would it make sense to use map instead of each in coordinatesToObjects? Why or why not? If so, refactor coordinatesToObjects to use map instead of each.

function coordinatesToObjectsMap(coordinates) {
  return map(coordinates, function(coord) {
      return {
      x: coord[0],
      y: coord[1]
    };
  });
}

console.log('Map Coordinates: ', coordinatesToObjectsMap(coordinates));


// This is the factorial function from the first week, that computes the factorial of its parameter n:
// Using map and the factorial function, write a function factorials that accepts an array of numbers as a parameter and outputs an array of the factorial of each of those numbers.
var numArrays = [1,2,3,4,5,6,7,8,9];

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log('map using Factorial: ', map(numArrays, factorial));
//======================================================Basic Requirements

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

// The incrementValues function from yesterday can be written much more elegantly using map. Rewrite that function using our new and improved version of map.

// For convenience, the prompt is reproduced below:

// Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of map for this, and you will need to check the type of each value to determine whether or not it should be incremented.

var testObj = {
  key1: 'string1',
  key2: 'string2',
  key3: 2,
  key4: 4,
  key5: 6,
  key6: 'string3'
};

//1
function incrementValues(obj){
  return map(obj, function(value){
    if(typeof value === 'number'){
      return value = value + 1;
    } else {
      return value;
    }
  });
}

console.log('incrementValues: ', incrementValues(testObj));

//2
// Write a function called uppercaseValues that, given an object as a parameter, returns a new object with all of its string values converted to uppercase. You'll want to make use of .toUpperCase() for this:

// "hello".toUpperCase(); // => "HELLO"
// Also, ensure that you only attempt to convert strings to uppercase -- you may want to use typeof for this.

function upperCaseValues(obj){
  return map(obj, function(value){
    if(typeof value === 'string'){
      return value.toUpperCase();
    } else {
      return value
    }
  });
}

console.log('map upperCaseValues: ', upperCaseValues(testObj));


//3
// Write a function called countNestedKeys that, given an object where all values are also objects, returns an object that contains the count of keys in each nested object, e.g.

function countNestedKeys(object) {
  return map(object, function(value){
    return Object.keys(value).length;
  });

}
console.log(countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}}));
// => {a: 2, b: 3}

//====================================================Basic Requirements Filter

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

//1
// Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.

var numsArray2 = [1,2,3,4,5,6,7,8,9,10];

function evens(numsArray){
  return filter(numsArray, function(num){
    return num % 2 === 0;
  });
}

console.log('evens: ', evens(numsArray2));

//2
// Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.

function multiplesOfThree(numsArray){
  return filter(numsArray, function(num){
    return num % 3 === 0;
  });
}

console.log('multipleOfThree: ', multiplesOfThree(numsArray2));

//3
// Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.
var positiveNegative = [-1,-2,-3,-4,-5,1,2,3,4,5,6,78,8];

function positives (numsArray){
  return filter(numsArray, function(num){
    return num > 0;
  });
}

console.log('postives: ', positives(positiveNegative));


//4
// Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.
var stringArray = ['one', 'two', 'four', 'taco', 'five', 'odd'];
function evenLength(strArray){
  return filter(strArray, function(word){
    return word.length % 2 === 0;
  });
}

console.log('evenLength: ', evenLength(stringArray));

//==============================================================More Practice
//1
// Use filter to write the following functions:

// odds: Accepts an array of numbers, and returns the odd ones.
// negatives: Like positives, but with negatives!
// largerThanSix: given an array of numbers, returns those larger than 6.

function oddNumbers(numsArray){
  return filter(numsArray, function(num){
    return num %2 !== 0;
  });
}

console.log('oddNumbers: ', oddNumbers(positiveNegative));

function negatives (numsArray){
  return filter(numsArray, function(num){
    return num < 0;
  });
}

console.log('negatives: ', negatives(positiveNegative));

function greaterThanSix (numsArray){
  return filter(numsArray, function(num){
    return num > 6;
  });
}

console.log('greaterThanSix: ', greaterThanSix(positiveNegative));

//2
// Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character:
var words = "the quick brown fox jumps over the lazy dog";

function startsWithChar(strings, character) {
  strings = strings.split(' ');
  return filter(strings, function(word){
    return word[0] === character;
  })
}

console.log('startsWithChar: ', startsWithChar(words, "q")); // => ["quick"]
console.log('startsWithChar: ', startsWithChar(words, "t")); // => ["the", "the"]

//3
// Extend the filter function to pass the index of each element to the predicate; then, complete the following:

// Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length, e.g.:
//HINT: You'll need to ensure that your version of filter also passes each elements' index (or key in the case of objects) to the predicate.


function evenIndexedEvenLengths(strings) {
  return filter(strings, function(word, i){
    return word.length % 2 === 0 && i % 2 === 0;
  });
}

console.log('evenIndexedEvenLengths: ', evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]));
// => ["lion", "doge"]
console.log('evenIndexedEvenLengths: ', evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));
// => ["purple", "yellow"]

// Write a version of filter that works on arrays and objects; then, use your updated version of filter to filter an object with values of mixed types to an object with only numeric values. You should be able to use your modified version of filter as follows:

console.log('filter objects: ', filter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
}));
// => {a: 1}


