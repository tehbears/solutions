//===================================Warm Ups!

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
 	console.log ((n - 1) + (n - 2));
	return fib(n - 1) + fib(n -2);
}

//================================More Pratice

function sumStartEnd(start, end){
	if(start > end){
		return (end, start);
	}
	if(end === start){
		return end;
	}
	return end + sumStartEnd(start, end - 1);
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
	if(myOwnModulo(n, 2) === 0){ //====Making use of the myOwnModlu function   																	written out below
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

function stringLength(n){
    if(n.slice(1) === ""){
        return 1;
    } return 1 + stringLength(n.slice(1))
}

// "hello".slice(1) = "ello", and "a".slice(1) = "".  So the first part says if there's a single letter left, return 1
// the second part then returns 1 and then adds to it the same function, shortened by 1 character
// so "hi" would be "hi".slice(1)="i" !== "", so return (1+stringLength("i".slice(1))
// a single letter string returns 1, so that would then return 1 to make the return (1+1)
// and so on...

//=============================================================create your own modulo

function myOwnModulo(x, y){
	var currentRemainder;

	function findRemainder (count){
		if( (x - (y * count) ) < 0){
			return currentRemainder;
		} else if( (x - (y * count) ) === 0){
			currentRemainder = 0;
			return currentRemainder;
		}
		currentRemainder = x - (y * count);
		return findRemainder(count + 1);
	}
	
	return findRemainder(0);
}
console.log('myOwnModulo: ',  myOwnModulo(82, 9));
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

