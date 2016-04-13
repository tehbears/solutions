//===================================Warm Ups!

//What is recursion start at 24 seconds
	//https://www.youtube.com/watch?v=k7-N8R0-KY4

// 1. Write a function sayHello that takes a language parameter, and returns "hello" in that language. Make the function work with at least three languages.

function sayHello(language){
	if (language === 'Spanish'){
		return 'Hola!';
	} else if( language === 'English'){
		return 'Hello!';
	} else if(language === 'French'){
		return 'Bonjour!'
	} else {
		return 'Error. Error. I do not know that language!';
	}
}	

// 2. Write a function validCredentials that accepts two parameters: username and password, and returns true if both are long enough, and false otherwise. You can decide what constitutes "long enough".

function validCredentials(username, password){
	if(username.length >= 5 && password.length >= 5){
		return 'Your Username and Password is long enough!';
	} else {
		return 'Your password and username must be five characters or more buddy!';
	}
}

//=====================================================Exercises for First 

function sum(n){
	if(n === 0){
		return 0;
	}
	return n + sum(n - 1);
}


function factorial(n){
	if(n === 0){
		return 1;
	}
	return n * factorial(n - 1);
}

function repeatString(str, count){
	if(count === 0){
		return " ";
	}

	if(count === 1){
		return str;
	} 
	return str + " " + repeatString(str, count - 1);
}

function fib(n){
 	if(n < 2){
 		return 1;
 	}
 	console.log(fib(n - 1) + fib(n -2));
	return fib(n - 1) + fib(n -2);
}


function sumStartEnd(start, end){
	if(start > end){
		return 0;
	}
	return start + sumStartEnd(start + 1, end);
}

function factorialStartEnd (start, end){
	if(start > end){
		return 1; 
	}
	return start * factorialStartEnd(start + 1, end);
}

//=====================================================helper functions
function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function addWithHelpers(x, y){
	if(y === 1){
		return inc(x);
	}
	return addWithHelpers(inc(x), dec(y));
}

//=========================================================isEven

function isEven (n) {
	if((n&1) === 0){
		return true;
	}
	return false;
}


//================================================repeated addition for multiplication

function repeatedAddition(x, y){
	if(y === 0){
		return 0;
	}
	return x + repeatedAddition(x, y - 1);
}

//==========================================================use .slice to get the length of a string

function stringLength (str, count){
	var newStr = str.slice(0, count);
	if(str === newStr){
		return count;
	}
	return stringLength(str, count + 1);
}

//=============================================================create your own modulo

function myOwnModulo(x, y){
	var currentRemainder;

	function findRemainder (count){
		if( (x - (y * count) ) < 0){
			return currentRemainder;
		} else if( (x - (y * count) ) === 0){
			currentRemainder = 0;
			return;
		}
		currentRemainder = x - (y * count);
		return findRemainder(count + 1);
	}
	findRemainder(0);
	return currentRemainder;
}
console.log(myOwnModulo(81, 2));
//============================================================find characters

function findCharacterCount (str, character){
	var totalCount;

	function countCharacter (characterCount, sliceCount1, sliceCount2 ){	
		var currentCharacter = str.slice(sliceCount1, sliceCount2);
		
		if(currentCharacter === character){
			characterCount++;
		}

		if(currentCharacter === ''){
			totalCount = characterCount;
			return;
		}

		return countCharacter(characterCount, sliceCount1 + 1, sliceCount2 + 1);
	}
	countCharacter(0, 0, 1);
	return totalCount;
}

//=================================================================create indexOf

function indexOf(str, character){
	var foundIndex;

	function findIndex(sliceCount1, sliceCount2, currentIndex){
		if(str.slice(sliceCount1, sliceCount2) === character){
			foundIndex = currentIndex;
			return foundIndex;
		}

		if(str.slice(sliceCount1, sliceCount2) === ''){
			return 'Error, not found!';	
		}
		findIndex(sliceCount1 + 1, sliceCount2 + 1, currentIndex + 1);
	}
	findIndex(0,1,0);
	return foundIndex;
}

//=======================================================improved power function

function powerSquaring (x, n){
	if(n === 1){
		return x;
	}
	if(n % 2 === 0){
		return powerSquaring(x * x, n/2);
	} else{
		return x * powerSquaring(x * x, (n - 1)/ 2);
	}
}

