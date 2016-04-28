//====================================Warm Ups
// Refactor the uses of for loops in the below functions to use each instead:

var people1 = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

var each = function(array, func){
	for(var i = 0; i < array.length; i++){
		func(array[i]);
	}
}

function ages(peopleArray) {
  var acc = [];
  each(peopleArray, function(obj){
    acc.push(obj.age);
  }) 
  return acc;
};

function firstNames(peopleArray) {
  var acc = [];
  each(peopleArray, function(obj){
    acc.push(obj.name.first);
  });
  return acc;
}

function lastNames(peopleArray) {
  var acc = [];
  each(peopleArray, function(obj){
    acc.push(obj.name.last);
  });
  return acc;
}

console.log(ages(people1)); // => [26, 34, 40, 45, 21]
console.log(firstNames(people1)); // => ["Alyssa", "Ben", "Eva", "Lem", "Louis"]
console.log(lastNames(people1)); // => ["Hacker", "Bitdiddle", "Ator", "Tweakit", "Reasoner"]

// Write a function called fullNames that makes use of each to output an array of full names (e.g. "Ben Bitdiddle") when given people as an argument. HINT: This function will look very similar to firstNames and lastNames from above.

var fullNames = function(peopleArray){
	var acc = []
	each(peopleArray, function(obj){
		acc.push(obj.name.first + ' ' + obj.name.last);
	});
	return acc;
}

console.log(fullNames(people1))

// Using the function ages from above and each, complete the function called averageAge below that should compute the average age of an array of people.

function averageAge(peopleArray) {
  var acc = 0;
  var count = 1;
  var ageArray = ages(peopleArray);
  each(ageArray, function(age){
  	acc += age;
  	count++;
  });
  acc = acc / count;
  return acc;
}

console.log('averageAge ', averageAge(people1));

//===========================================================Basic Requirements

var each = function (array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

//1
function indexedExponentials(numbersArray) {
	var acc = [];

	each(numbersArray, function(number, i){
		acc.push(Math.pow(number, i));
	});  
	return acc;
}

//2
function evenIndexedOddNumbers(numbersArray){
	var acc = [];
	each(numbersArray, function(number, i){
		if(i % 2 === 0 && number % 2 === 0){
			acc.push(number);
		}
	});  

	return acc;
}

//3
function evenIndexedEvenLengths(wordsArray){
		var acc = [];

	each(wordsArray, function(word, i){
		if(i % 2 === 0 && word.length % 2 === 0){
			acc.push(word);
		}
	});  

	return acc;
}

//=====================================Basic Requirements each used with objects and arrays

var each = function(coll, f){
	if(Array.isArray(coll)){
		for(var i = 0; i < coll.length; i++){
			f(coll[i], i)
		}
	} else {
		for(var key in coll){
			f(coll[key], key);
		}
	}
}

var myObj = {
	key1: 'value1',
	key2: 'value2',
	key3: 9,
	key4: 3,
	key5: 7
};

//1
function values (obj){
	var acc = [];
	each(obj, function(value){
		acc.push(value);
	});
	return acc;
}

function keys (obj){
	var acc = [];
	each(obj, function(value, key){
		acc.push(key);
	});
	return acc;
}

//2
function keysLongerThan(obj, num){
	var acc = {};
	each(obj, function(value, key){
		if(key.length > num){
			acc[key] = value;
		}
	});
	return acc;
}

//3
function incrementValues(obj){
	var acc = {};
	each(obj, function(value, key){
		if(typeof value === 'number'){
			value = value + 1;
			acc[key] = value;
		}
	});
	return acc;
}

//=================================================================Map
//==================================================Basic Requirements
function each (coll, f) {
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

function map (array, f){
	var acc = [];
	each(array, function(element, i){
		acc.push(f(element, i));
	});
	return acc;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

//1
function firstNames(peopleArray) {
  return map(peopleArray, function(person) {
    return person.name.first;
  });
}

function lastNames(peopleArray) {
  return map(peopleArray, function(person) {
    return person.name.last;
  });
}

function fullNames(peopleArray) {
  return map(peopleArray, function(person) {
    return firstNames(person) + ' ' + lastNames(person);
  });
}

console.log('fullNames: ', fullNames(people));

//2
function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

console.log('map abs', map([1, -2, 37, -100, -8, 5], abs));
//3
// Part One: Let's start by writing a function max that, when given an array of numbers computes the maximum number in that array. You will want to use EACH for this.
function max(numbers) {
  // YOUR CODE HERE
  var acc = 0;
  each(numbers, function(number){
    if(number > acc){
        acc = number;
    }
  });
  return acc;
  // return max[0]
}
console.log('Max: ', max([1, 3, 2])); // => 3
console.log('Max: ', max([4, 23, 100])); // => 100

var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];
// maximums(sampleInput); // => [3, 100, 7]
// Part Two: Now that you have a function that computes the the maximum number in an array of numbers, use map to transform each array in the sampleInput into its maximum by completing the maximums function:
function maximums(arrayOfNums){
    return map(arrayOfNums, function(nums){
        return max(nums);
    })
}
console.log('maximums: ', maximums(sampleInput));

//4
var stringOfPeople = "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";

function parseCSV (peopleString){
	var peopleArray = peopleString.split('\n');

	return map(peopleArray, function(person, i){
		person = person.split(',');
		return { name: { first: person[0], middle: person[1], last: person[2] }, age: person[3] };
	});

}

console.log('parseCSV', parseCSV(stringOfPeople));

//=================================================More Practiced

//1
function exponentials(numbers) {
  // YOUR CODE HERE
  return map(numbers, function(number){
  	return Math.pow(number,number);
  })
}
console.log('expo: ', exponentials([1, 2, 3, 4])); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
console.log('expo: ', exponentials([3, 2, 5])); // => [27, 4, 3125]


//2
// First, write a function reverse that accepts a string as a parameter and returns a reversed version of that string (you'll want to use a for loop for this). Then, use reverse to write a function called reverseWords that accepts a string as an argument, and returns a string with all of its words reversed. You'll want to use split and join in both of these functions.

function reverse(str){
		var result = [];
		str = str.split('');
		for(var i = str.length - 1; i >= 0; i--){
			result.push(str[i]);
	}
	return result.join('');
}

function reverseWords(str){
	str = str.split(' ');
  var holdResultArray = map(str, function(word){
    return reverse(word);
  });
  return holdResultArray.join(' ');
}



console.log('reverseWords: ', reverseWords("hello world")); // => "olleh dlrow"
// Note that reverseWords should reverse each word individually, not the entire string

//3
function pluck(peopleArray, age) {
  return map(peopleArray, function(person) {
    return person[age];
  });
}

console.log('pluck: ', pluck(people, 'age'));
//=================================================Advanced
//1
function map2(array1, array2, func){
	var acc = [];
	for(var i = 0; i < array1.length; i++){
		acc.push(func(array1[i], array2[i]));
	}
	return acc;
}

console.log('map2: ', map2([1, 2, 3], [4, 5, 6], function(a, b) {
  return a * b;
}));
// => [4, 10, 18]

// Now, write a function called mapN that accepts an arbitrary number of arrays and a n-ary function as arguments, and constructs a new array by combining the elements of all the arrays, e.g.:
	// You'll need to read about the arguments keyword and apply to complete this function.

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

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

var mapN = function() {
  //get function
  var func = arguments[arguments.length - 1];
  //get passed in arrays
  var arrays = [].slice.call(arguments, 0, arguments.length-1);

  //if we only have one array, then we do not need to use apply
  if(arrays.length === 1) {
    return map(arrays[0], func);
  }

  //if we have more than one array then we need to use continue

  var results = [];
  //initialize results array
  each(arrays, function() {
    results.push([]);
  });
  // Builds a new array that contains all of index 0, a new array that contains all of index 1 and so forth
  each(arrays, function(arr) {
    each(arr, function(elem, i) {
      results[i].push(elem);
    })
  });

	//we then pass the array of arrays to map, and each array is passed
		//to our function through the apply method
  return map(results, function(arr) {
    return func.apply(null, arr);
  });
}


console.log('mapN with many arrays: ', mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], function(a, b, c) {
  return (a * b) + c;
}));
// => [6, 12, 20]

console.log('mapN with one array: ', mapN([1, 2, 3], function(x) { return x * x; })); // => [1, 4, 9]






