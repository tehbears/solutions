//=====================Warm ups
function isPalindrome(str) {
  if(str.length <= 1) {
    return true;
  }
  console.log(str);
  if(str[0] === str[str.length-1]) {
    return isPalindrome(str.substr(1, str.length-2));
  }
  return false;
}

console.log(isPalindrome('racecar'));

function reverseString(str) {
  if(!str.length) {
    return '';
  }
  return str[str.length-1] + reverseString(str.slice(0, str.length-1));
}



//======================Exercise for Variables

var animal = "monkey";
var monkey = "animal";
var x = 15;
var y = 10;
var huh = "huh?";
var notTrue = false;
var isTenEven = 10 % 2 === 0;

var firstName = "Brandon";
var lastName = "Stookey";

var fullName = firstName + " " + lastName; 

var x = 5;
x + 10;
x; // => 5 we never reassigned x

var x = 17;
x = (x + 1) / 2;
x * 4;
x; // => 9 because we reassign x on line 44

var x = 5;
var y = 20;
x = y;
y = y + 7;
x; // => 20 because we reassign x on line 50

var x = 10;
var y = 5;
x = (x * 4) - 3;
x + 17;
x = x + y;
x; // => 42 because x is reassigned on line 56, and then reassigned again on line 58

var count = 1;

function counter() {
  return count++;
}
counter(); // => 1
counter(); // => 2
counter(); // => 3
// etc.

var upperBound = 5;
var numberToGuess = randInt(upperBound);
var numberOfGuesses = 0;
var highScore = 5;

function guessMyNumber(n) {

  numberOfGuesses = numberOfGuesses + 1;

  if(numberOfGuesses === 5){
      numberOfGuesses = 0;
      upperBound = upperBound - 1;
      numberToGuess = randInt(upperBound);
      return "You lose! You took too many guesses!";
  }

  if (n > upperBound) {
    return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
  } 
  else if (n === numberToGuess) {
    upperBound = upperBound + 1;
    numberToGuess = randInt(upperBound);   
     
    if(numberOfGuesses === 1){
      if(numberOfGuesses < highScore){
        highScore = numberOfGuesses;
        numberOfGuesses = 0;
        return "Congrats! You guessed my number, and you beat the highscore. The recored is now " + highScore +" guess(es)!"
      }
    } 

    if(numberOfGuesses < highScore){
      highScore = numberOfGuesses;
      numberOfGuesses = 0;
      return "Congrats! You guessed my number, but you did not beat the highscore which totals only " + highScore +" guess(es)!"
      }

    var temp = numberOfGuesses; 
    numberOfGuesses = 0;
    return "It took you " + temp + " tries to guess my number! The current highscore is a total of " + highScore + " guess(es)";
  }
  if(n < numberToGuess){
    return "Too low, guess higher!";
  } else if(n > numberToGuess){
    return "Too high, guess lower!";
  }
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}


// console.log('1: ',guessMyNumber(5));
// console.log('2: ',guessMyNumber(4));
// console.log('3: ',guessMyNumber(3));
// console.log('4: ',guessMyNumber(2));
// console.log('5: ',guessMyNumber(1));


//===============================================computerGuessMyNumber

var computerUpperBound = 10;
var computerLowerBound = 0;
var computerRandomNumber = computerRandInt(computerUpperBound);
var computerGuess = Math.floor(10 / 2);
var computerTotalGuesses = 0;

function computerGuessMyNumber(n) {
  computerTotalGuesses = computerTotalGuesses + 1;
  if(computerTotalGuesses === 3){
    return "The Computer failed to guess in 3 tries!";
  }

  if(computerGuess === computerRandomNumber){
    if(computerTotalGuesses === 1){
      return 'The computer won, and it took only ' + computerTotalGuesses + ' guess!'
    }
    return 'The computer won! And it took a total of ' + computerTotalGuesses + ' tries!';
  }
  if(computerGuess > computerRandomNumber){
    computerGuess = Math.floor((computerUpperBound - computerGuess) / 2);
    computerLowerBound = computerGuess;
    return computerGuessMyNumber(computerGuess);
  } 
  else if (computerGuess < computerRandomNumber){
    computerGuess = Math.floor((computerGuess - computerLowerBound) / 2);
    computerUpperBound = computerGuess;
    return computerGuessMyNumber(computerGuess);    
  }
}

function computerRandInt(n) {
  return Math.floor(Math.random() * (n + 1))
}


// console.log('ComputerGuess', computerGuessMyNumber(1));


//===================================Exercise for while loops

function sum(n){
  var result = 0;
	while(n > 0){
		result = result + n;
    n--;
	}
	return result; 
}

function factorial(n){
  var result = 1;
  while(n > 0){
    result = result * n;
    n--;
  }
  return result; 
}

function repeatString(str, count){
  var result = '';
  while(count > 0){
    result = result + str;
    count = count - 1;
  }
  return result;
};


