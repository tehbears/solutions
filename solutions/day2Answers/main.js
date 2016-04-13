//What are at least two different types of data (values) you know?
	//Strings and Numbers

//Write an expression in the console to evaluate the percentage of people in class who are wearing glasses today.
	// (7 / 35) * 100;


//=============What's wrong with this function?
//==Cube Missing parens, mising bracket, the 'y' should have been an x 

function cube (x) {
	
return x * x * x;

}

//===========A polynomial is a mathematical expression consisting of a sum of terms, each term including a variable or variables raised to a power and multiplied by a coefficient.  
//==Slides showing how they are the same http://www.slideshare.net/fresherssite/why-is-ab2-a2b22ab
//===========lhs solution

function lhs (a, b){
	return (a + b) * (a + b);
}

//===========rhs solution

function rhs (a,b){
	return (a * a) + ( 2  * ( a  * b ) ) + (b * b);
}


//===========================================================Old enough to drink

function oldEnough (age){
	if(age >= 21){
		return true;
	}
	return false;
}


//==========================================================String same length?

function sameLength(string1, string2){
	if(string1.length === string2.length){
		return true;
	}
	return false
}

//===========================================================Password long enough

function passwordLongEnough (password){
	if(password.length > 5){
		return true
	}
	else return false;
}


//=============================================================random int

function randInt (n){
	return Math.random() * (n - 1);
}

//================================================================Guess my number

function guessMyNumber (num){
	var randomNum = Math.floor(Math.random() * 5)
	if(num > 5){
		return "Your guess is out of bounds! Please guess between 0-5";
	}
	if(num ===  randomNum){
		return "You guessed my number!";
	}
	console.log('RandomNum: ', randomNum);
	return "Nope! That wasn't it!";
}


//============================================================================= ! unary or binary?
// It is unary here is a table http://www.codingunit.com/unary-and-binary-operator-table
	//A binary operator has two values it works with x + x binary
	//A unary operator has only one
	// !false unary example

//==========================================================================whatToDoOutside
	function whatToDoOutside (temp, condition){
		if(temp === 'Sunny' && condition === 'Warm'){
			return 'Go Surfing!';
		} else if(temp === 'Snowy' && condition === 'Cold'){
			return 'Go skiing!';
		} else if (temp === 'Rainy' && condition === 'Warm'){
			return 'Dance in the rain!';
		}
	}

	// console.log(whatToDoOutside('Rainy', 'Warm'));

	//=================================================================================bar bouncer function

	function bouncer (age, name, day){
		if(age >= 21 && name !== 'Joe' && 'Friday' === day || day === 'Saturday'){
			return 'You recieved a bracelet!';
		}else if( age < 21 && day === 'Friday' || day === 'Saturday'){
			return 'Welcom in youngster!';
		}else if(age >= 21 && name !== 'Joe'){
			return 'Welcome!'
		} else if (age < 21 || name === 'Joe'){
			return 'Get outta here!';
		}
	}

//=====================================================================================scoreToGrade
function letterGrade (letter, score) {
	// if(score === 100){
	// 	return letter + '+';
	// }
	
	score = score % 10;

	if(score >= 0 && score <= 2){
		return letter + '-'; 
	} else if( score >= 3 && score <= 7){
		return letter;
	} else if( score >= 8 && score <= 9){
		return letter + '+';
	}
}

 function scoreToGrade (score){
	if(score > 90){
		return letterGrade('A', score);
	} else if (score >= 80){
		return letterGrade('B', score);
	} else if(score >= 70){
		return letterGrade('C', score);
	} else if(score >= 60){
		return letterGrade('D', score);
	} else if(score < 60){
		return letterGrade('F', score);
	}
}

console.log( scoreToGrade(100)    );
// console.log(letterGrade('c', 94));

//===It turns out that we can write logical and and logical or in terms of each other and logical not using De Morgan's Laws.
	//==Write a function or that works like ||, but only uses ! and &&.
		//"not (A and B)" is the same as "(not A) or (not B)"

	function worksLikeOr (){

	}	

// Write a function or that works like ||, but only uses ! and &&.
// Write a function and that works like &&, but only uses ! and ||.

// // "not (A and B)" is the same as "(not A) or (not B)"

// also,

// "not (A or B)" is the same as "(not A) and (not B)".

function worksLikeAnd(a, b){
	if(!(a || b)){
		return true;
	}
	return false;
}

function worksLikeOr(a, b){
	if(!a && !b){
		return true;
	}
	return false;
}

// console.log(worksLikeOr(false, false))
// console.log(worksLikeAnd(false, true));








