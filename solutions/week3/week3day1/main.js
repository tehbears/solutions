//===========================================warm ups

// Age of the Solar System
// Distance from the center of the galaxy
// Number of known comets
// The Planets
  // Name
  // Size (in Earth-masses)
  // Distance of each from sun
  // Number of known satellites (orbiting bodies, e.g moons)

var soloarSystem = {
  ageOfSoloarSystem: '4.568 billion years',
  distanceFromCenterofGalaxy: ' 27,000 ± 1,000 ly',
  numberOfKnownComets: '3,406  (as of 2016-03-07)',
  thePlanets: [
                {
                  planetsName: 'Mercury',
                  planetsSize:  '0.055 Earth Masses',
                  distanceFromSun: '0.4 AU from the Sun',
                  numberOfKnownSatellites: 'No natural Satellites'

                },
                {
                  planetsName: 'Venus',
                  planetsSize: '0.815',
                  distanceFromSun: '.07 AU From the Sun',
                  numberOfKnownSatellites: 'No natural Satellites' 

                },
                                {
                  planetsName: 'Earth',
                  planetsSize: '0.815 Earth Masses',
                  distanceFromSun: '0.7 AU From the Sun',
                  numberOfKnownSatellites: 'the Moon'

                },
              ]
};


var result = [];
function range(start, end) {

	if(start === end){
		return result;
	}
	
	
	return	result.push(start), range(start + 1, end);
}
//same problem but solved using a while loop
function rangeWhile(start, end) {
    var arr = [];
    while (start < end){
        arr.push(start);
        start = start + 1;
    }
    return arr;
}
// range(0, 4); // => [0, 1, 2, 3]
// range(2, 7); // => [2, 3, 4, 5, 6]
// range(10, 10); // => []
// range(10, 2); // => []

// HINT: It might be helpful to have a fullName function that, when given a person as a parameter, returns a person's full name.

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullname(arr,i) {
    first = arr[i].name.first;
    middle = arr[i].name.middle;
    last = arr[i].name.last;    
    if (middle === undefined){
     return first + " " + last;
    } 
    return first + " " + middle + " " + last;
}

function longestName(people) {
  var longest = '';
  for (var i = 0; i < people.length; i++) {
    if (fullname(people,i).length > longest.length){
        longest = fullname(people,i);
    }
  }
  return longest;
}
console.log('longestName: ', longestName(people));
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}


//==========================================================exercises
//=================================================Basic Requirements
var numsArray = [1,2,3,4];

// 1.
var cube = function(x) {
  return x * x * x;
}
// 2.
var fullName = function (first, last) {
  return first + " " + last;
}
// 3.
var power = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
// 4.
var sumCubes = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}
//====================================================Iterating Over Arrays Using each

//1
function each(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
}
//2
function sumSquares(numbers) {
  var total = 0;
  each(numbers, function(number){
    total += number * number; 
  });
  return total;
}
//3
function sumCubes(numbers){
  var total = 0;
  each(numbers, function(number){
    total += cube(number); // using cube function from above
  })
  return total;
}

//4
var product = function(array){
  var total = 1;

  for(var i = 0; i < array.length; i++){
    total *= array[i];
  }
  return total;
}
//4
var productEach = function(array){
  var total =  1;
  each(array, function(number){
    total *= number;
  });
  return total;
}

//5
var cubeAll = function(array){
  var total = [];

  for(var i = 0; i < array.length; i++){
    total.push(cube(array[i])); //using cube funciton from above
  }
  return total;
}
//5
var cubeAllEach = function(array){
  var total =  [];
  each(array, function(number){
    total.push(cube(number)); // using cube funciton from above
  });
  return total;
}

//6

var odd = function (array){
  var result = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      result.push(array[i]);
    }
  }
  return result;
}
//6
var oddEach = function(array){
  var result = [];
  each(array, function(number){
    if(number % 2 !== 0){
      result.push(number);
    }
  });
  return result;
} 

//================================================================More Practice
//1

var sumByAllElementsMultipliedByFour = function(array){
  var total = 0;
  each(array, function(number){
    total += number * 4;
  });
  return total;
}
//2
var sumBy = function(numbers, f){
  var total = 0;
  each(numbers, function(number){
    total += f(number);
  });
  return total;
}

//3
console.log(sumBy(numsArray, function(number){ return number;}))

//4
var productBy = function(numbers, f){
  var total = 1;
  each(numbers, function(number){
    total *= f(number);
  });
  return total;
}

//===================================================================Advanced
//1
var doubleAll = function(array){
  var total = [];
  each(array, function(number){
    total.push(number *2);
  });
  return total;
}

//2 
var halveAll = function(array){
  var total = [];
  each(array, function(number){
    total.push(number  / 2);
  });
  return total;
}

//3 
var myStrArray = ['hello', 'goodbye', 'taco'];

var upperCase = function(strArray){
  var total = [];
  each(strArray, function(word){
    total.push(word.toUpperCase());
  });
  return total;
}

//2
var map = function(array, func){
  var result = [];
  each(array, function(element){
    result.push(func(element));
  });
  return result;
}

//4 
console.log(map(myStrArray, function(word){ return word.toUpperCase();}));

console.log(map(myStrArray, function(word){ return word.toLowerCase();}));

console.log(map(["the", "quick", "brown", "fox", "jumped"], function(word){ return word.length;}));

var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];

console.log(map(people, function(obj){ return obj.name; }));

console.log(map(people, function(obj){ return obj.name + ' is ' + obj.age; }));

//===========================================================Finding Patterns: Filtering

var filter = function(array, predicate){
  var acc = [];
  each(array, function(element){
    if(predicate(element)){
      acc.push(element)
    }
  });
  return acc;
}

//1
var evenFilter = function(numbers){
  return filter(numbers, function(num){
    return num % 2 === 0;
  });
}

//2
var anotherNumsArray = [1,3,9,12, -1, -3, -5, 27, 81, 126, 8, 314159265];
///Almost works, does not work with really large numbers such as 314149265

var multiplesOfThree = function(numbers){
  return filter(numbers, function(num){
    return num % 3 === 0;
  });
}

console.log('multiplesOfThree',multiplesOfThree(anotherNumsArray))

//3
var positives = function(numbers){
  return filter(numbers, function(num){
    return num > 0;
  });
}

//4

var evenLengthStrArray = ['to', 'four', 'too', 'one', 'five'];

var evenLength = function(strArray){
  return filter(strArray, function(word){
    return word.length % 2 === 0;
  });
}


//5
//I already built the filter function at the beginning of this exercise
console.log(filter([1,2,3,4], function(x){ return x % 2 === 0;}));


//6
var negatives = function(numbers){
  return filter(numbers, function(num){
    return num < 0;
  });
}

function largerThanSix(numbers){
  return filter(numbers, function(num){
    return num > 6;
  });
}

//7
var words = "the quick brown fox jumps over the lazy dog".split(" ");

var startsWithChar = function (strings, character) {
 return filter(strings, function(word){
  return word[0] === character;
 });
}
console.log(startsWithChar(words, "q")); // => ["quick"]
console.log(startsWithChar(words, "t")); // => ["the", "the"]

