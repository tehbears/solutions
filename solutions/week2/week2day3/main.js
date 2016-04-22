//=======================================Warm Ups
// What do we use arrays for? Discuss the purpose of arrays with your partner until you are both confident that you can explain why this construct is useful.

//=====> Arrays are used to store a collection of data; often of the same type. 
	//This construct is useful because we can access data in an array through indexes. 
function squareNumbers(array){
	var result = [];

	for(var i = 0; i < array.length; i++){
		result.push(array[i] * array[i]);
	}
	return result;
}

//=========================================Exercises 

var aboutMe = {
	name: {	
				first: 'Brandon', 
				middle: 'William',
				last: 'Stookey'
				},
	age: 30,
	hometown: 'Hammond',
	favoriteTvShow: 'Flash',
	DoB: 'Jan 16, 1986',
	Pets: 'Dog'
}

var objMe = {
	first: 'Brandon',
	middle: 'William',
	last: 'Stookey'
}

var favoriteMovie = {
	title: 'Inception',
	director: 'Christopher Nolan',
	year: 2010,
	actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
}

var key = 'name';
var person = {
    name: 'Alyssa P. Hacker',
    age: 26,
    hometown: 'somewhere'
};
person['age']; // => 26
person[key]; // => 'Alyssa P. Hacker'
person['hometown'] // => 'somewhere'

function formatName(obj){
	return obj.first + " " + obj.middle + " " + obj.last;
}

var people = [
	{name: {first: "Brandon", middle: "William", last: "Stookey"}, age: 30},
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function arrayOfNames(array, func){
	var result = [];
	for(var i = 0; i < array.length; i++){
		result.push(func(array[i].name));
	}
	return result; 
}

function averageAge(array){
	var result = 0;

	for(var i = 0; i < array.length; i++){
		result = result + array[i].age;
	}
	result = result / array.length;
	return result;
}

function findAge(array, age){
	var result = [];

	for(var i = 0; i < array.length; i++){
		if(array[i].age > age){
			result.push(array[i].name.first + ' ' + array[i].name.last);
		}
	}
	return result;
}

var dirtyObject = {
  _fht: 192492,
  name: "Alyssa P. Hacker",
  age: 26,
  _byz: 939205,
  _ttrs: 510852
}

function clean(obj) {
  for(var key in obj){
  	if(key[0] === '_'){
  		delete obj[key];
  	}
  }
  return obj;
}

var objNumbers = {
	example1: 2,
	example2: 3,
	example3: 'Bob',
	example4: '()#&)',
	example5: 7,
	example6: 9,
	exmaple7: 8
}


function removeOddValues(obj) {
  for(var key in obj){
  	if(typeof obj[key] === "number"){
  		if(obj[key] % 2 !== 0){
	  		delete obj[key];
  		}
  	}
  }
  return obj;
}

function countWords(str){
	var objResult = {};
	str = str.split(' ');

	for(var i = 0; i < str.length; i++){
		var key = str[i].toLowerCase();
		if(!objResult[key]){
			objResult[key] = 1;
		} else {
			objResult[key] = objResult[key] + 1;
		}
	}
	return objResult;
}

function countCharacters(str){
	var objResult = {};
	str = str.split('');

	for(var i = 0; i < str.length; i++){
		var key = str[i].toLowerCase();
		if(!objResult[key] && key !== ' '){
			objResult[key] = 1;
		} else if (key !== ' ') {
			objResult[key] = objResult[key] + 1;
		}
	}
	return objResult;
}

function select(obj, keys) {
  var objResult = {};

  for(var i = 0; i < keys.length; i++){
  	var key = keys[i];
  	if(!objResult[key]){
  		if(obj[key] !== undefined){
	  		objResult[key] = obj[key];
	  	}	
  	}
  }
  return objResult;
}

function extend(obj1, obj2) {
	for(var key in obj2){
		obj1[key] = obj2[key];
	}
	return obj1;
}

//==================================================Advance
//Object.keys;

function objectKeysExtend(obj1, obj2) {
	if(typeof obj1 !== 'object' && obj1 !== null){
		return obj1;
	} else if (typeof obj2 !== 'object' && obj2 !== null){
		return obj2;
	}

	var objKeys1 = Object.keys(obj1);
	var objKeys2 = Object.keys(obj2);
	var allObjKeys = objKeys1.concat(objKeys2);
	var objValue = [];
	var result = {};

	for(var key in obj1){
		objValue.push(obj1[key]);
	}

	for(var key in obj2){
		objValue.push(obj2[key]);
	}

	for(var i = 0; i < allObjKeys.length; i++){
		result[objectKeysExtend(allObjKeys[i], null)] = objectKeysExtend(null, objValue[i]);
	}
	return result;
}

var stringifyJSON = function(obj) {
	if(Array.isArray(obj)){
	  	var results = [];
	  	
	  	for(var i = 0; i < obj.length; i++){
	  	};

	  	return '[' + results + ']';
  	};
  	
	if(obj && typeof obj === 'object'){
		var valuesArray = [];
		var keysArray;
		var results = [];

		for(var key in obj){
			valuesArray.push(obj[key]);
		};
			
		keysArray = Object.keys(obj);

		for(var i = 0; i < keysArray.length; i++){
			if(valuesArray[i] === undefined || typeof valuesArray[i] === 'function') {
	    		return '{' + '}';
	  		};
			if(typeof valuesArray[i] !== 'number'){
				results.push(stringifyJSON(keysArray[i]) + ':' + stringifyJSON(valuesArray[i]));
			} else{
				results.push(stringifyJSON(keysArray[i]) + ':' + valuesArray[i]);
			}
		}	
		return '{' + results + '}'
	
	};	

	if(typeof obj === 'string'){
		return obj =  '"' + obj + '"';
	};
	
	return '' + obj;
};





