// function makeAccount(initial) {
//   var balance = initial;

//   return {
//     withdraw: function(amount) {
//       if (balance - amount >= 0) {
//         balance = balance - amount;
//         return "Here’s your money: $" + amount;
//       }
//       return "Insufficient funds.";
//     },
//     deposit: function(amount) {
//       balance = balance + amount;
//       return "Your balance is: $" + balance;
//     },
//     checkBalance: function(){
//     	return "Your balance is: $" + balance 
//     }
//   };
// }

// Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:

// var account = makeAccount(100);
// console.log(account.checkBalance()); // => "Your balance is: $100"
// console.log(account.deposit(50));
// console.log(account.checkBalance()); // => "Your balance is: $150"

//data base request
// 'Richard'
// search by name
// ID

// Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which have functions as values. up should make the count increase, and down should make the count decrease:


function makeCounter(start) {
  var counter = start; 

  return {
  	up: function(){
  		return counter = counter + 1;
  	},
  	down: function(){
  		return counter = counter - 1;
  	},
  	increaseBy5: function(){
  		return counter = counter + 5;
  	},
  	reset: function(){
  		return counter = 0;
  	}
  };

}

var counter = makeCounter(0);
var newCounter = makeCounter(5);
console.log(counter.up()); // => 1
console.log(counter.up()); // => 2
console.log(counter.down()); // => 1
console.log(counter.down()); // => 0


console.log(counter.increaseBy5());


// Give your counter a reset capability as well, that resets the count back to its initial value.

var counter = makeCounter(5);
console.log(counter.up()); // => 6
console.log(counter.up()); // => 7
console.log('reset: ',counter.reset()); // => 5

// Most banks keep records of the transactions that take place in an account. Implement a transaction log that keeps track of all transactions that occur in a given account.

// A single transaction should probably be represented by an object, for instance:

// {type: "deposit", amount: 100, before: 110, after: 210, status: "approved"}
// {type: "withdrawal", amount: 5000, before: 210, after: 210, status: "denied"}
// Modify the return value of your makeAccount function to include the capability to view the last n transactions with a function called transactionHistory:

function makeAccount(initial) {
  var balance = initial;
  var transactionArray = [];

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
      	var temp = balance;
        balance = balance - amount;
				transactionArray.push({
					type: 'withdraw',
					amount: amount,
					before: temp,
					after: balance,
					status: 'approved'
				});        
        return "Here’s your money: $" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
    	var temp = balance;
      balance = balance + amount;
				transactionArray.push({
					type: 'deposit',
					amount: amount,
					before: temp,
					after: balance,
					status: 'approved'
				});        
      return "Your balance is: $" + balance;
    },
    checkBalance: function(){
    	return "Your balance is: $" + balance 
    },
    transactionHistory: function(n){
    	return transactionArray.slice(0, n);
    }
  };
}


var account = makeAccount(100);
// ...
console.log(account.checkBalance()); // => "Your balance is: $100"
console.log(account.deposit(50));
console.log(account.deposit(50));
console.log(account.deposit(50));
console.log(account.deposit(50));
console.log('balance: ', account.checkBalance());
console.log('history: ', account.transactionHistory(5)); // => [{...}, {...}]




















