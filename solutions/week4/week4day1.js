//===================================================warm ups
function each(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
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

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}
//1
// The following function wordLengths accepts a string as a parameter and returns an array of the lengths of each word in the string. Rewrite wordLengths using each (written above for your convenience); that is, replace the for loop.

function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, function(word){
    acc.push(word.length);
  });
  return acc;
}
console.log('wordLengths: ', wordLengths("The quick brown fox jumps over the lazy dog."));
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]


//2
// wordLengths involves transforming every word into its length, which makes this function an ideal use-case of the map abstraction. Using map (also written above for convenience), rewrite wordLengths (but write a new function, e.g. wordLengthsMap) again -- but this time using map.

function wordLengthsMap(string){
    var words = string.split(" ");
    return map(words, function(word){
      return word.length;
    });
}


console.log('wordLengthsMap: ', wordLengthsMap("The quick brown fox jumps over the lazy dog."));
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]

//3
// Write a function called wordsLongerThanThree using filter that, given a string as input, returns an array of the words in the original string that are longer than three (have length greater than three).

function wordsLongerThanThree(string){
  string = string.split(' ');
  return filter(string, function(word){
    return word.length > 3;
  });
}

console.log('wordsLongerThanThree: ', wordsLongerThanThree("The quick brown fox jumps over the lazy dog."))

//4
// Write a function called concat that takes two arrays as parameters and returns an array with all of the elements of the second one added to the first one -- your implementation should use reduce. It should work like this:

function concat(arr1, arr2) {
 return reduce(arr2, function(start, element){
  start.push(element);
  return start;
 }, arr1)
}
console.log('concat: ', concat([1, 2, 3], [4, 5, 6])); // => [1, 2, 3, 4, 5, 6]
console.log('concat: ', concat([], [3, 4, 5])); // => [3, 4, 5]
console.log('concat: ', concat([], [])); // => []

//==========================================Basic Requirements Intro To Closures
//1
// Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:

// We could implement this using the global scope like this:

var count = 0;

function counterGlobal() {
  count = count + 1;
  return count;
}

console.log('counterGlobal: ', counterGlobal()); // => 1
console.log('counterGlobal: ', counterGlobal()); // => 2
console.log('counterGlobal: ', counterGlobal()); // => 3
// But now that we know about closures, we can do something way cooler. Finish the implementation of makeCounter below so that we can make multiple counters, each with their own internal count using closures.

function makeCounter() {
  // YOUR CODE HERE
  var counter = 0;

  function count(){
   return counter = counter + 1;
  }

  return count;
}

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log('counter1: ', counter1()); // => 1
console.log('counter1: ', counter1()); // => 2
console.log('counter2: ', counter2()); // => 1
console.log('counter1: ', counter1()); // => 3
console.log('counter2: ', counter2()); // => 2

//2
// Update makeCounter so that, instead of always starting from zero, you can start from any number, e.g.:

var counter = makeCounterStartFromAnyNumber(100);
counter(); // => 101;

function makeCounterStartFromAnyNumber(start) {
  // YOUR CODE HERE
  var counter = start;

  function count(){
   return counter = counter + 1;
  }

  return count;
}

var newCounter = makeCounterStartFromAnyNumber(100);
console.log(newCounter()); // => 101;

//3
// One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:

function pow(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  }
}

// Fill in the ??? so that it works like this:

var square = pow(2);
var cube = pow(3);
var power4 = pow(4);

console.log('square: ', square(5)); // => 25
console.log('cube: ', cube(3)); // => 27
console.log('power: ', power4(4)); // => 256

function makeAccount(initial) {
  var balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return "Here’s your money: $" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return "Your balance is: $" + balance;
    },
    checkBalance: function() {
      return 'Your balance is: $' + balance;
    }
  };
}

//1
// )Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:

var account = makeAccount(100);
console.log('checkBalance: ', account.checkBalance()); // => "Your balance is: $100"
console.log('deposit: ', account.deposit(50));
console.log('checkBalance: ', account.checkBalance()); // => "Your balance is: $150"


// Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which have functions as values. up should make the count increase, and down should make the count decrease:

function newMakeCounter (start){
  var count = start;
  return{
    up: function(){
      return count = count + 1;
    },
    down: function(){
      return count = count - 1;
    },
    reset: function() {
      return count = start;
    }
  }
}

var counter = newMakeCounter(0);
console.log('counter up: ', counter.up()); // => 1
console.log('counter up: ', counter.up()); // => 2
console.log('counter down: ', counter.down()); // => 1
console.log('counter down: ', counter.down()); // => 0

// Give your counter a reset capability as well, that resets the count back to its initial value.

var counter1 = newMakeCounter(5);
console.log('newMakeCounter ', counter1.up()); // => 6
console.log('newMakeCounter ', counter1.up()); // => 7
console.log('newMakeCounter ', counter1.reset()); // => 5

//=========================================More Pratice Closure

//
// Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:

function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperLimit) {
  var upperBound = upperLimit;
  var guessCounter = 0;

  return{
    guessMyNumber: function (n) {
      guessCounter = guessCounter + 1;
      if (n > upperBound) {
        return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
      } else if (n === randInt(upperBound)) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";
    },
    numGuesses: function() {
      return 'You have made a total of ' + guessCounter + ' guess(es)!'
    },
    reset: function(){
      guessCounter = 0;
      return 'The Game has been reset. Total guesses have been rolled back to ' + guessCounter + ' guesses.';
    }

  }
}
// You will need to define a function makeGame, and at the minimum, you should be able to play the game like this:

var game = makeGame(10); // 10 is the upper bound
console.log('game: ', game.guessMyNumber(2)); // => "Nope! That wasn't it!"
console.log('game: ', game.guessMyNumber(1)); // => "Nope! That wasn't it!"
console.log('game: ', game.guessMyNumber(5)); // => "You guessed my number!"
// Ways to improve the game include:

// A way to "give up" and have the game reset, e.g. game.giveUp().
// Keep track of how many guesses have been made, and provide a way to access them, e.g. game.numGuesses().
console.log('game: ', game.numGuesses());
console.log('game: ', game.reset());
console.log('game: ', game.numGuesses());
// See the original exercise for the rest of the improvements!

//===================================================Higher Order Functions

// Write a function someEven that, given an array of numbers as an argument, returns true if at least one of the numbers is even. Use reduce to complete this exercise.

//1
function someEven(numbers) {
  // YOUR CODE HERE
  return reduce(numbers, function(result, num){
    if(result === true){
      return true
    } else {
      return num % 2 === 0;
    }
  }, false);
}
console.log('someEven: ', someEven([1, 3, 8, 5, 7])); // => true
console.log('someEven: ', someEven([1, 3, 5, 7])); // => false

//2
// Write the functions someOdd, somePositive, and someNegative that work similarly to someEven.

function someOdd(numbers) {
  // YOUR CODE HERE
  return reduce(numbers, function(result, num){
    if(result === true){
      return true
    } else {
      return num % 2 !== 0;
    }
  }, false);
}

function somePositive(numbers) {
  // YOUR CODE HERE
  return reduce(numbers, function(result, num){
    if(result === true){
      return true
    } else {
      return num > 0;
    }
  }, false);
}

function someNegative(numbers) {
  // YOUR CODE HERE
  return reduce(numbers, function(result, num){
    if(result === true){
      return true
    } else {
      return num < 0;
    }
  }, false);
}

console.log('someOdd: ', someOdd([1, 3, 8, 5, 7, -1, -2]));
console.log('somePositive: ', somePositive([1, 3, 8, 5, 7, -1, -2]));
console.log('someNegative: ', someNegative([1, 3, 8, 5, 7, -1, -2]));

//3
// Using reduce, write a function some that accepts an array as its first parameter, and a predicate (a function that returns true or false) as its second parameter. If the predicate returns true for any of the elements in the array, some should return true.

function some(array, predicate){
  return reduce(array, function(result, element){
    if(result === true){
      return true;
    } else {
      return predicate(element);
    }
  }, false);
}

console.log('some: ', some([1, 3, 8, 5, 7, -1, -2], function(num){
  return num % 2 === 0;
}));

//4
// Using some, determine if some of the words in the following string have a length greater than 4:

var strArray = "The quick brown fox jumps over the lazy dog.".split(' ');

console.log('someString > 4: ', some(strArray, function(word){
  return word.length > 4;
}))

//=========================================================Advance

// Most banks keep records of the transactions that take place in an account. Implement a transaction log that keeps track of all transactions that occur in a given account.

// A single transaction should probably be represented by an object, for instance:

// {type: "deposit", amount: 100, before: 110, after: 210, status: "approved"}
// {type: "withdrawal", amount: 5000, before: 210, after: 210, status: "denied"}
// Modify the return value of your makeAccount function to include the capability to view the last n transactions with a function called transactionHistory:

function makeAccount1(initial) {
  var balance = initial;
  var transaction = [];
  return {
    withdraw: function(amount) {
      var currentBalance = balance;

      if (balance - amount >= 0) {
        balance = balance - amount;
        transaction.push({
          type: "withdraw", 
          amount: amount, 
          before: currentBalance, 
          after: balance, 
          status: "approved"
        });

        return "Here’s your money: $" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      var currentBalance = balance;
      balance = balance + amount;

      transaction.push({
        type: "deposit", 
        amount: amount, 
        before: currentBalance, 
        after: balance, 
        status: "approved"
      });

      return "Your balance is: $" + balance;
    },
    checkBalance: function() {
      return 'Your balance is: $' + balance;
    },
    transactionHistory: function(n){
      return transaction.slice(0, n);
    },
    aveargeDepositWithdrawal: function(){
      var depositAverage = 0;
      var withdrawalAverage = 0;
;
      for(var i = 0; i < transaction.length; i++){
        if(transaction[i].type === 'withdraw'){ 
          depositAverage += transaction[i].amount;
        } else {
          withdrawalAverage += transaction[i].amount;
        }
      }
      console.log('withdrawalAverage: ', withdrawalAverage)

      return 'Your average withdrawal is $' + depositAverage / transaction.length + '\n' + 'Your average deposit is $' + withdrawalAverage / transaction.length 
    }
  };
}

var account = makeAccount1(100);
// ...

console.log('checkBalance: ', account.checkBalance()); // => "Your balance is: $100"
console.log('deposit: ', account.deposit(50));
console.log('checkBalance: ', account.checkBalance()); // => "Your balance is: $150"
console.log('withdrawal: ' , account.withdraw(30));
console.log('transaction history : ', account.transactionHistory(2)); // => [{...}, {...}]

console.log('aveargeDepositWithdrawal ', account.aveargeDepositWithdrawal());
// Other ideas to try include:
// Implement a way to get the last n withdrawals or deposits
// Implement a function that determines the average withdrawal and deposit amounts.
// Learn about the JavaScript Date object (try typing new Date() into a console) and incorporate time into the transactions.
