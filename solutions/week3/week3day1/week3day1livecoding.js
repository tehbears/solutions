// Write a function sumByAllElementsMultipliedByFour that takes an array as an argument and returns the sum of all elements multiplied by four.
var numbers = [1,2,3,4,5];

function each (collection, f){
	for (var i = 0; i < collection.length; i++){
		f(collection[i]);
	}
}


function sumby(array, f){
	
}


function sumByAllElementsMultipliedByFour(numbers){
	var result = 0;

	each(numbers, function(number){
		result = result + (number * 4);
	});

	return result;
}

console.log('numbers: ', sumByAllElementsMultipliedByFour(numbers));


// function sumSquaresUsingForLoop(numbers) {
//   var total = 0;
//   for(var i = 0; i < numbers.length; i++){
//   	total = total + (numbers[i] * numbers[i]);
//   }
//   return total;
// }

// function each(array, f) {
//   for (var i = 0; i < array.length; i++) {
//     f(array[i]);
//   }
// }

// function sumSquareUsingEach(numbers){
// 	var total = 0;
// 	//Magic happens here

// 	each(numbers, function(number){
// 		total = total + (number * number);
// 	});
	
// 	return total;
// }

// console.log('for loop: ', sumSquaresUsingForLoop(numbers));
// console.log('each: ', sumSquareUsingEach(numbers));






// // Given the following array of people, write a function that, when passed people as a parameter, returns the person (that is, your function should return an object) with the longest name (first, middle & last).
// 	// HINT: It might be helpful to have a fullName function that, when given a person as a parameter, returns a person's full name.

// var people = [
//   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
//   {name: {first: "Louis", last: "Reasoner"}, age: 21}
// ];
// //'Alyssa P. Hacker'

// function fullName(array, i){
// 	var firstName = array[i].name.first;
// 	var middleName = array[i].name.middle;
// 	var lastName = array[i].name.last;

// 	if(middleName === undefined){
// 		return firstName + lastName;
// 	}
// 	else{
// 		return firstName + middleName + lastName;
// 	}
// }


// function longestName(peopleArray) {
//   var currentLongest = fullName(peopleArray, 0);
//   var currentLongestWord = peopleArray[0];
//   for(var i = 0; i < peopleArray.length; i++){
//   	if(currentLongest.length < fullName(peopleArray, i).length){
//   		currentLongest = fullName(peopleArray, i);
//   		currentLongestWord = peopleArray[i];
//   	};
//   }
//   return currentLongestWord;
// }

// console.log(longestName(people));

// // => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}








