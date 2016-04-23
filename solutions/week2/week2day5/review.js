// // Recursion
// //http://stackoverflow.com/questions/126756/examples-of-recursive-functions
//This is just recursion written out in plain english, I copied link to the stackoverflow article above that wrote this out
// // A child couldn't sleep, so her mother told a story about a little frog,
// //   who couldn't sleep, so the frog's mother told a story about a little bear,
// //      who couldn't sleep, so bear's mother told a story about a little weasel
// //        ...who fell asleep.
// //      ...and the little bear fell asleep;
// //   ...and the little frog fell asleep;
// // ...and the child fell asleep



// //A recursion is when a function calls itself until, it doesn't 
// 	//Until it doesn't is referring to a base case that it has met
// 	//each recursive calls moves us closer to the base case


// //===============================================Problem 1:

// // n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n){ 
	if(n === 0){ 
		return 0;
	}

	return n + sum(n - 1); //==>invoking the function on itself starts a recursive process
												// passing n - 1 as our argument moves us closer to meeting the base case, which will then stop the function, and then it will execute the code stored in the call stack.

}

// //example sum(4) ==> 4 + 3 + 2 + 1 ==> 10;

// //============================================Problem 2:

// Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:

function factorial(n){
	if(n === 0){
		return 1;
	}

	return n * factorial(n - 1);
}

// //example factorial(3) ==> 3 * 2 * 1 ==> 6


// //===================================================Problem 3:
// // Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated, e.g.

function repeatStrings(str, n){
	if(n === 0){
		return '';
	}

	return str + repeatStrings(str, n - 1);
}

// //example repeatString('dog', 3) //====> 'dog' + 'dog' + 'dog' => 'dogdogdog'

// //====================================================Problem 4

// function countSheeps(num){

// }

// //example countSheeps(3)); ==> 'Another Sheep jumps over the fence Another Sheep jumps over the fence Another Sheep jumps over the fence'

// //===============================Problem 4:

// //create a recursive function that can search through an array, an return the item if is found,
// //or return not found if the item is not found. Use .splice()

var arrayOfDinners = ['tacos', 'fried chicken', 'steak', 'hamburger', 'pizza'];

function makeMeDinner(dinnerArray, dinnerRequest){
	if(dinnerArray.length === 0){
		return 'I cannot make that meal!';
	}

	if(dinnerArray[0] === dinnerRequest){
		return 'Here is your dinner ' + dinnerArray[0] + '!';
	}

	dinnerArray.splice(0,1);
	
	return makeMeDinner(dinnerArray, dinnerRequest);

}

// //================================================Advance Problem 1:

// // By now you should have worked with the length property of strings, e.g. "hello".length. Your task is to write a function called stringLength that accepts a string as a parameter and computes the length of that string; however, as you may have guessed, you are not allowed to use the length property of the string!

// // Instead, you'll need to make use of the string method called slice. To get an idea of how slice works, try the following at a console:


function stringLength(str){
	if(str.slice(1) === ''){
		return 1;
	}
	return 1 + stringLength(str.slice(0,str.length - 1));
}

console.log(stringLength('Brandon'))


// //====================================================for in loop
// //example of a for in loop that you will use in your function
// 	// for(var key in obj){
	
// 		//insert your code here//
	
// 	//}

var myObj = {
	string1: 'I am a string!',
	string2: 'I am also a string!',
	string3: 'OMG! Another string',
	string4: 'You got it, I am a string',
	string5: 'Can we throw in numbers now?',
	num1: 9,
	num2: 4,
	num3: 7,
	num4: 10,
	num5: 8,
	droids: 'Droids'
}

// //================Problem 1:

// //Create a function, using a for in loop, that will find the droids the stromtroopers are looking for

function findDroids(obj){
	for(var key in obj){
		if(obj[key] === 'Droids'){
			return '(Uh-oh! They found the droids, quick Jedi Hand Wave!)These are not the droids you are looking for(whew, that was a close one).';
		}
		else{
			return 'Move Along.';
		}
	}
}

// //=================Problem 2:
// //==Create a function, using a for in loop, that returns an object that only contains numbers
// //remember to use typeof
function findAllNumbers(obj){
	var result = {};
	for(var key in obj){
		if(typeof obj[key] === 'number'){
			result[key] = obj[key];
		}
	}
	return result;
}

// //================Problem 3:
// //==Create a function, using a for in loop, that returns an object containing only strings
// // remember to use typeof
function findAllStrings(obj){
	var result = {};
	for(var key in obj){
		if(typeof obj[key] === 'string'){
			result[key] = obj[key];
		}
	}
	return result;
}

// //================Problem 4:
// //==Create a function, using a for in loop, that will square all numbers. Return an object with only numbers.
// // remember to use typeof
function squareAllNumbers(obj){
	var result = {};
	for(var key in obj){
		if(typeof obj[key] === 'number'){
			result[key] = obj[key] * obj[key];
		}
	}
	return result;
}

// //================Problem 5: 
// //==Create a function using a for in loop, that will return the value of the item that is being searched for, if the item is not found return 'Cannot find item'

function searchObj(obj, search){
	for(var key in obj){
		if(obj[key] === search){
			return obj[key];
		}
	}
}

// //==================================================Using for loops with arrays that have objects inside of them :D

// // example of a for loop that you will us in your function:
// 	// for(var i = 0; i < SOMEARRAY.length; i++){
		
// 		// your code will go here

// 		//}


var book1 = {
	bookTitle: 'Harry Potter',
	author: 'J.K Rowling',
}

var book2 = {
	bookTitle: 'Hunger Games',
	author: 'Suzanne Collins',
}

var book3 = {
	bookTitle: 'Enders Game',
	author: 'Orson Scott Card',
}

var booksArray = [book1, book2, book3];

// //=====Create a function that returns all book names in an Array

function returnAllBooksTitle (arrayOfObj){
	var result = '';
	for(var i = 0; i < arrayOfObj.length; i++){
		if(i + 1 === arrayOfObj.length){
			return result +=  'and ' + arrayOfObj[i].bookTitle + '.';
		}
		result += arrayOfObj[i].bookTitle + ', ';
	}
}

// //==Create a function that searches for an author by his/her name, using a for in 

function searchForAuthor(arrayOfObj, authorName){
	for(var i = 0; i < arrayOfObj.length; i++){
		if(arrayOfObj[i].author === authorName){
			return arrayOfObj[i];
		}
	}
	return 'Could not Find author!';
}

// //==Create a function that adds a genre key to an object, and it also adds the genre of the book to the object as well

function addGenreKeyAndGenre (obj, genreKey, genre){
	obj[genreKey] = genre;
	return obj;
}


// //========================================Create your own object
// //===It can contain anything you want
// var myTreasureChest = {

// }

// //write a function that returns one item from your object, it can be anything, no loop needed

// function returnOneItemFromYourObject(obj){

// }

// function searchMyTreasureChest(obj, search){

// }




















