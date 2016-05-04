//======================================Warm Ups

// In this exercise, you are going to create a simple stopwatch using closures. Before we can start however, we need to become familiar with a couple of built-in functions.

// Given the above, implement a makeStopwatch function that returns an object with the following functionality:

// start: starts the stopwatch
// stop: stops the stopwatch
// reset: resets the stopwatch to zero
// A stopwatch should exhibit the following behavior:

function makeStopwatch(){
	var timer = 0;
	var stopWatch;

	return {
		start: function(){
			stopWatch = setInterval(function() {
  			console.log('Elapsed time: ' + ++timer + 's');
			}, 1000);
		},
		stop: function(){
			clearInterval(stopWatch);
		},
		reset: function(){
			timer = 0;
		}
	}
}

var stopwatch = makeStopwatch();
// stopwatch.start();


//===================================================================Exercises

//1
// The old bank account example from lecture looked as follows:

function makeAccount(initial) {
  var account = {};

  account.balance = initial;
  account.withdraw = withdraw;
  account.deposit = deposit;

  return account;
}

function withdraw (amount) {
  if (this.balance - amount >= 0) {
    this.balance = this.balance - amount;
    return "Here’s your money: $" + amount;
  }
  return "Insufficient funds.";
}

function deposit (amount) {
  this.balance = this.balance + amount;
  return "Your balance is: $" + this.balance;
}
// Refactor the above as an Account class that shares its methods across different instances.
var account1 = makeAccount(500);
var account2 = makeAccount(200);
console.log('Account1 deposit: ', account1.deposit(50));
console.log('Account2 deposit: ', account2.deposit(50));
console.log('Account1 deposit: ', account1.deposit(120));
console.log('Account2 depsoit: ', account2.deposit(120));

//2
// Our stopwatch exercise looked like this when complete:

function makeStopwatch1() {
	var stopwatch = {};
  stopwatch.lapArray = [];
  stopwatch.timer = 118;
	stopwatch.stopWatch;
  stopwatch.start = start;
  stopwatch.stop = stop;
  stopwatch.reset = reset;
  stopwatch.lap = lap;

  return stopwatch;
}
// As before, refactor the makeStopwatch into a Stopwatch class with shared methods.

var start = function () {
  // console.log('this: ', this.timer);
  var that = this;
  this.stopWatch = setInterval(function() {
    // console.log('setInterval: ', this);
    that.timer = that.timer + 1;
    if(that.timer > 60){
      var minutes = Math.floor(that.timer / 60);
      var seconds = that.timer - (minutes * 60);
      console.log("Elapsed time: " + minutes + "m " + seconds + "s"); 
    } else{
      console.log("Elapsed time: " + that.timer + "s.");
    }
  }, 1000);
}

var stop = function () {
  clearInterval(this.stopWatch);
}

var lap = function(){
  this.lapArray.push('Adding lap @ ' + this.timer + '\n');
  console.log(this.lapArray.join(' '));  
} 

var reset = function () {
  clearInterval(this.stopWatch);
  this.lapArray = [];
  this.timer = 0;
}

var myStopwatch = makeStopwatch1();

//=======================================================More Practice Toaster

// In this exercise we are going to make a Toaster class, and our Toaster is going to toast bread (because that's what toasters do). Here's a template for getting started on the Toaster class:
// Your task will be to implement methods that actually make this toaster work!

// addToast: This method should accept a string representing "toast" as a parameter, e.g. "white bread", and set the toast property of the Toaster instance to that piece of toast.


function Toaster() {
  var instance = {};
  instance.toastCounter = 0;
  instance.timer = 0;
  instance.toast;
  instance.addToast = addToast;
  instance.eject = eject;
  instance.toasterTimer;
  instance.startToaster = startToaster;
  instance.stopToaster = stopToaster;

  return instance;
}

function addToast (toast){
  return this.toast = toast;
}

function eject(){
  if(this.toast === undefined){
    return 'The toaster is empty'
  }
  var temp = this.toast;
  this.toast = undefined;
  return 'The toaster ejects a toated piece of ' + temp;
}

function startToaster() {
  if(this.toast !== undefined){
    this.counter = 0;
  }
  if(this.toast === undefined && this.toastCounter > 0){
    return 'You burnt your toast!';
  }
  if(this.toast === undefined){
    return 'Please insert a piece of toast.'
  }

  var temp = this.toast;
  this.toastCounter = ++this.toastCounter;
  this.toast = undefined;

  this.toasterTimer = setTimeout(function() {
    console.log('Ding! ' + temp + ' (toasted)')
  }, 5000);
}

function stopToaster() {
  clearTimeout(this.toasterTimer);
  console.log('Toaster Canceled!');
}

var newToaster = Toaster();

console.log('addToast: ', newToaster.addToast('white bread'));
console.log('eject: ', newToaster.eject());
console.log('addToast: ', newToaster.addToast('white bread'));
console.log('startToaster: ', newToaster.startToaster());





