//===================================Warm Ups!

// Write descriptions in plain English of the two steps required to solve a problem using the style of repetition that we learned yesterday.
	//=====First you want to write  a base case to stop the repitition function. Then you will want to invoke the function inside of itself to start the reptition process

//Complete the function sumOfSquares that computes the sum of all the numbers from 0 to n, but where each number is squared.

function sumOfSquares (start, end){
	if(start > end){
		return 0;
	}

	return (start * start) + sumOfSquares(start + 1, end);
}

 // Write a function called sumEvens that works like the other summation functions that you've written, but only sums the even numbers between 0 and n.


function sumOfEvens (start, end){
	if(start > end){
		return 0;
	}

	if(start % 2 === 0){
		return start + sumOfEvens(start + 1, end);
	}

	return sumOfEvens(start + 1, end);
}

//=====================================================Exercises for day 4 

function sum(n){
	function innerSum(n, total){
		if(n === 0){
			return total;
		}
		return innerSum(n - 1, total + n); 		
	}
	return innerSum(n, 0)
}

console.log('Sum function: ', sum(4));

function factorial(n){
	function innerFactorial(n, total){
		if(n === 0){
			return total;
		}
		return innerFactorial(n - 1, total * n);
	}
	return innerFactorial(n, 1);
}

function repeatString(str){
	function innerRepeatString(total, count){	
		if(count === 0){
			return total;
		}

		if(count === 1){
			return total + str;
		} 
		return innerRepeatString(total + str, count - 1);
	}
	return innerRepeatString('', 3);
}

function sumStartEnd(start, end){
	function innerSumStartEnd(total, start){
		if(start > end){
			return total;
		}
		return innerSumStartEnd(start + total, start + 1);
	}
	return innerSumStartEnd(0, start);
}

function factorialStartEnd (start, end){
	function innerFactorialStartEnd(total, start){	
		if(start > end){
			return total; 
		}
		return innerFactorialStartEnd(total * start, start + 1);
	}
	return innerFactorialStartEnd(1, start);
}

//=====================================================helper functions

function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

function addWithHelpers(x, y){
	function innerAddWithHelpers(total, y){	
		if(y === 1){
			return inc(total);
		}
		return innerAddWithHelpers(inc(total), dec(y));
	}
	return innerAddWithHelpers(x, y);
}

//=========================================================isEven
function myOwnModulo(x, y){

	function findRemainder (currentRemainder, count){
		if( (x - (y * count) ) < 0){
			return currentRemainder;
		} else if( (x - (y * count) ) === 0){
			currentRemainder = 0;
			return currentRemainder;
		}
		currentRemainder = x - (y * count);
		return findRemainder(count + 1);
	}
	return findRemainder(1, 1);
}

function isEven (n) {
    if(myOwnModulo(n, 2) === 0){
        return true;
    }
    return false;
}

//================================================repeated addition for multiplication

function repeatedAddition(x, y){
	function innerRepeatedAddition (total, y){	
		if(y === 1){
			return total;
		}
		return innerRepeatedAddition(total + x, y - 1);
	}
	return innerRepeatedAddition(x, y);
}

//==========================================================use .slice to get the length of a string

function stringLength(n){
  function innerStringLength(n, count){
    if(n.slice(1) === ""){
        return count;
    } return innerStringLength(n.slice(1), count + 1);
  }
  return innerStringLength(n, 1)
}

//=============================================================create your own modulo

function myOwnModulo(x, y){

	function findRemainder (currentRemainder, count){
		if( (x - (y * count) ) < 0){
			return currentRemainder;
		} else if( (x - (y * count) ) === 0){
			currentRemainder = 0;
			return currentRemainder;
		}
		currentRemainder = x - (y * count);
		return findRemainder(count + 1);
	}
	return findRemainder(1, 1);
}
	// console.log(myOwnModulo(81, 10));

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

