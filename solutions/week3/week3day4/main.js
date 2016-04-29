//Reduce exercises start on line 86
// warm ups using reduce

// Discuss the purpose of reduce with your partner until both of you are confident that you could explain its purpose to the class. Try to describe what reduce does, not how it does it.

// Rewrite the sumCubes function below using reduce instead of each:
function each(coll, func){
  if(Array.isArray(coll)){
    for(var i = 0; i < coll.length; i++){
      func(coll[i], i);
    }
  } else {
    for(var key in coll){
      func(coll[key], key);
    }
  }
}

function reduce(coll, f, start){
  var acc = start;
  each(coll, function(element, i){
    acc = f(acc, element, i);
  });
  return start;
}
var numsArray = [1,2,3,4];

function sumCubes(numbers) {
  var total = 0;
  each(numbers, function(number) {
    total = total + Math.pow(number, 3);
  });
  return total;
}

function sumCubesReduce(array){
  return reduce(array, function(start, element){
    return start + Math.pow(element, 3);
  }, 0);
}

console.log('sumCubes: ', sumCubes(numsArray));
console.log('sumCubesReduce: ', sumCubesReduce(numsArray));

// Write a function called smallestWords that accepts two parameters, string and threshold (number), and returns an array containing all the words smaller than threshold. You should use reduce to complete this function.
console.log('hello!');
function smallestWordsReduce(string, threshold) {
  console.log('string', string);
  string = string.split(' ');
  return reduce(string, function(start, word, i){
    if(word.length < threshold){
      start.push(word);
    }
    return start;
  },[])
}

console.log('smallestWords: ', smallestWordsReduce("the quick brown fox", 4)); // => ["the", "fox"]



//==============================================warm ups using filter

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
// Given the following array of people:

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
];

//1
// Discuss the purpose of filter with your partner until the two of you are confident in your abilities to explain the purpose of filter to the class; as usual, this is not how filter works -- rather, what its purpose is and what kinds of problems it is suitable to solve.

//2
// Use filter on the array of people above to return only the people older than 30.

function olderThan30 (peopleArray){
	return filter(peopleArray, function(person){
		return person.age > 30;
	});
}

console.log('olderThan30: ', olderThan30(people));
// => [
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
// ]

//3
// Use filter on the array of people above to return only the people whose first name starts with the letter l. HINT: You can use array access notation to get the first character of an array, e.g.:

function findNameByLetter(peopleArray, letter){
	return filter(peopleArray, function(person){
		return person.name.first[0].toLowerCase() === letter;
	});
}

console.log('findNameByLetter: ', findNameByLetter(people, 'l'));

//4
// Rewrite the sumCubes function below using reduce instead of each:

function sumCubes(numbers) {
  var total = 0;
  each(numbers, function(number) {
    total = total + Math.pow(number, 3);
  });
  return total;
}

//6
// Write a function called smallestWords that accepts two parameters, string and threshold (number), and returns an array containing all the words smaller than threshold. You should use reduce to complete this function.

function smallestWords(string, threshold) {
  // YOUR CODE HERE
}

smallestWords("the quick brown fox", 4); // => ["the", "fox"]

//=========================================================Exercises Reduce

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

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

//1
// We've shown that we can write the function sum -- which sums an array of numbers -- using reduce like this (see slides for more):

function sum(numbers) {
  return reduce(numbers, function(total, number) {
    return total + number;
  }, 0);
}

// Replace the ??? below to complete the implementation of product, that returns the product of an array of numbers.
var numsArray = [1,2,3];

function product(numbers) {
  return reduce(numbers, function(total, number) {
    return total * number;
  }, 1);
}

console.log('product: ', product(numsArray));

//2
// Rewrite the averageAge function from the warmup using reduce. The function signature and people array are copied below for your convenience:

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function averageAge(people) {
  // First you'll need to compute the sum of all the ages
  // Second, divide the sum by the number of people (people.length)
  var counter = 0;
  var sumOfAge = reduce(people, function(total, person){
  	counter++;
  	return total + person.age;
  }, 0);

  return sumOfAge / counter;
} 
console.log(averageAge(people));

// The range function from yesterday looks like this:

function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}
// Using range and reduce, complete the factorial function below that should compute the factorial of n.
// HINT: If you cannot think of how to do this, it may help to first try writing the function using each, and then refactor it to use range & reduce.

function factorial(n) {
  // YOUR CODE HERE
  return reduce(range(1, n), function(total, num){
  	return total * num;
  }, 1);
}

console.log(factorial(4));

//======================================================More Practice

// The sumBy function from previous lessons can be implemented using each like this:

//1
function sumBy(numbers, f) {
  var sum = 0;
  each(numbers, function(number) {
    sum = sum + f(number);
  });
  return sum;
}
// Rewrite sumBy using reduce.

function sumByReduce(numsArray, f){
	return reduce(numsArray, function(total, num){
		return total + f(num);
	}, 0)
}

console.log('sumByReduce: ', sumByReduce([1,2,3], function(num){
	return num * num;
}));
//2
// The max function below takes an array of numbers as a parameter, and returns the maximum number in the array:

function max(numbers) {
  var max = numbers[0];
  each(numbers, function(number) {
    if (number > max) {
      max = number;
    }
  });
  return max;
}
// Rewrite max using reduce.

function maxReduce(numsArray){
	return reduce(numsArray, function(total, num){
			if(num > total){
				return total = num;
			} else {
				return total;
			}
	}, 0);
}

console.log('maxReduce: ', maxReduce([1,7,6,4,3,8,6,9]));

//3
// Write a function called countOccurrences that, given a string and a character (a string with length one) as parameters, returns the total number of times that character occurs in the string. For example:

function countOccurrences(str, letter){
	var counter = 0;
	str = str.split('');
	return reduce(str, function(total, strLetter){
		if(strLetter === letter){
			return counter++
		} else{
			return counter
		}
	}, 0);
}


console.log('counter: ', countOccurrences("hello", "l")); // => 2
console.log('counter: ', countOccurrences("the", "z")); // => 0
console.log('counter: ', countOccurrences("hello, world!", "l")); // => 3

//4
// In the lecture (see slides) we ran through a function called everyNumberEven -- write functions like it that do the following:

// Given an array of numbers, determine if every one of them is odd
// Given an array of numbers, determine if every one of them is positive
// Given an array of strings, determine if all of them have a length greather than 3.
// Given an array of strings, determines if all of them contain the letter "e"
var oddNumsArray = [1,3,5,7,9];
var mixNumsArray = [1,2,3,4,5,6,7];

function oddNumbersReduce(numsArray){
	return reduce(numsArray, function(result, num){
		return result && num % 2 !== 0;
	}, true);
}

console.log('oddNumbersReduce: ', oddNumbersReduce(oddNumsArray));
console.log('oddNumbersReduce: ', oddNumbersReduce(mixNumsArray));

var positiveNumsArray = [1,2,34,5];
var positiveNegativeNumsArray = [-1,2,3,4,-9];

function positiveNegativeReduce(numsArray){
	return reduce(numsArray, function(result, num){
		return result && num > 0;
	}, true);
}

console.log('positiveNegativeReduce: ', positiveNegativeReduce(positiveNumsArray));
console.log('positiveNegativeReduce: ', positiveNegativeReduce(positiveNegativeNumsArray));

var lessThan3 = 'o 2 4';
var greaterThan3 = 'three four taco';

function lengthGreaterThan3(str){
	var str = str.split(' ');
	return reduce(str, function(result, word){
		return result && word.length > 3;
	}, true);
}

console.log('lengthGreaterThan3: ', lengthGreaterThan3(lessThan3));
console.log('lengthGreaterThan3: ', lengthGreaterThan3(greaterThan3));

var arrayStringOfEs = ['Hello', 'Goodbye', 'Hey'];
var noEsArray = ['Pizza', 'Taco', 'Batman'];

function containsE(strArray){
	return reduce(strArray, function(result, str){
		return result && reduce(str.split(''), function(result, letter){
			if(result === true){
				return true;
			}
			return result = letter === 'e';
		}, false);
	}, true);
}

console.log('containsE: ', containsE(arrayStringOfEs));
console.log('containsE: ', containsE(noEsArray));
// Write a function every that takes two parameters: an array and a predicate (a function that returns true or false). every should return true if the predicate returns true for every element in the array. You should be able to use it to write everyNumberEven like this:

function everyNumberEven(numbers) {
  return every(numbers, function(number) {
    return number % 2 === 0;
  });
}

// Test that it works by rewriting the functions in exercise (4) above using every.

function every(array, predicate){
	return reduce(array, function(result, element){
		return result && predicate(element);
	}, true);
}

console.log('every: ', every([1,3,5], function(element){
	return element % 2 !== 0;
}));

//==========================================================Advance
//1
// Let's write a function called join that works just like the built-in join, but using reduce! If you're unfamiliar with the built-in version of join, this is how it works:

["the", "quick", "brown", "fox"].join(" "); // => "the quick brown fox"
["one", "two", "three"].join(":"); // => "one:two:three"

// Part One: First, write a function called joinWith that takes three arguments: the string to join onto, the string that will be joined, and a separator. That is, it should work like this:

function joinWith(onto, next, separator) {
  	return onto + separator + next;
}
console.log('joinWith: ', joinWith("the quick", "brown", " ")); // => "the quick brown"
console.log('joinWith: ', joinWith("one:two", "three", ":")); // => "one:two:three"

// Part Two: Now, using joinWith and reduce, write join:

function join(array, separator) {
  return reduce(array, function(result, word){
  	if(arguments.length < 3){
  		result = word;
  		array.slice(0,1);
  	}
  	return joinWith(result, word, separator);
  });
}

console.log('join: ', join(["the", "quick", "brown", "fox"], " ")); // => "the quick brown fox"
console.log('join: ', join(["one", "two", "three"], ":")); // => "one:two:three"

//2
// Uses of reduce are not restricted to turning arrays into numbers -- use reduce to rewrite map (instead of using each).
  function mapReduce(array, f){
    return reduce(array, function(result, element, key){
      console.log('mapReduce Result: ', result);
      result[key] = element;
      return result;
    }, []);
  }

console.log('mapReduce', mapReduce([1,2,3], function(element){
  return element * 2;
}));

//3
// We previously covered the function countWords that worked like this:

function countWords(s) {
  var acc = {};
  var words = s.split(" ");
  for (var i = 0; i < words.length; i = i + 1) {
    var word = words[i];
    if (acc[word] === undefined) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }
  }
  return acc;
}

function countWords(s){
  s = s.split(' ');
  return reduce(s, function(acc, word){
    if(acc[word] === undefined) {
      acc[word] = 1;
      return acc;
    } else {
      acc[word]++;
      return acc;
    }
  }, {})
}

console.log('count words: ', countWords('one one two two three four four'));
// Rewrite countWords using reduce.
// Write the function countChars that works like countWords, but counts characters instead of words (using reduce of course).

function countChars(s){
  s = s.split('');
  return reduce(s, function(acc, letter){
    if(acc[letter] === undefined) {
      acc[letter] = 1;
      return acc;
    } else {
      acc[letter]++;
      return acc;
    }
  }, {})
}

console.log('countChars: ',countChars('aaaaabbbcccccddddiiiiiigggg'));


//======================================================Improved Reduce

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

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

function range(start, end) {
  var acc = [];
  for (var i = start; i <= end; i++) {
    acc.push(i);
  }
  return acc;
}

function factorial(n){
  return reduce(range(1, n), function(acc, num){
    return acc * num;
  });
}

console.log('factorial: ', factorial(9));

//2
function maxReduce(numsArray){
  return reduce(numsArray, function(acc, num){
    if(acc < num){
      return acc = num;
    } else {
      return acc;
    }
  });
}

console.log('maxReduce: ', maxReduce([1, 2, 3, 4, 5, 500, 6, 9, 10]))

// The range function that we've explored so far looks like this:
// Modify range so that the end parameter is optional, and in the event that it is not supplied, range computes a range from 0 to start.

// function range(start, end) {
//   var acc = [];
//   for (var i = start; i < end; i++) {
//     acc.push(i);
//   }
//   return acc;
// }

function rangeWithoutEndProvided(start, end) {
  var acc = [];
  if(end === undefined){
    end = start; 
    start = 0;
  }
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}

console.log('rangeWithoutEndProvided: ', rangeWithoutEndProvided(9));

//============================================================Advance 

// There is a way to implement reduce such that it works on both arrays and objects. You'll likely want to make use of Object.keys function.
