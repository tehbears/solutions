//================================warm ups

function power_iter(base, exponent) {
  var result = 1;
  var count = 0;
  while (count < exponent) {
    result = result * base;
    count = count + 1;
  }
  return result;
}


function sum(numArray){
	var result = 0;
	for(var i = 0 ; i < numArray.length; i++){
		result = result + numArray[i];
	}
	return result;
}


function max(numArray){
	var max = Number.NEGATIVE_INFINITY;
	for(var i = 0; i < numArray.length; i++){
		if(numArray[i] > max){
			max = numArray[i];
		} 
	}
	return max;
}

function longestWord(str){
	var result;
	str = str.split(' ');
	result = str[0];

	for(var i = 0; i < str.length; i++){
		if(str[i].length > result.length){
			result = str[i];
		} 
	}
	return result;
}

function remove(array, element){
	var result = [];
	for(var i = 0; i < array.length; i++){

		if(array[i] !== element){
			result.push(array[i]);
		}
	}
	return result;
}

function evens(array){
	var result = [];
	for(var i = 0; i < array.length; i++){

		if(array[i] % 2 === 0){
			result.push(array[i]);
		}
	}
	return result;
}

function average (arrayNums){
	var result = 0;
	for(var i = 0; i < arrayNums.length; i++){
		result = result + arrayNums[i];
	}
	result = result / arrayNums.length;
	return result;
}

function min(numArray){
	var min = Number.POSITIVE_INFINITY;
	for(var i = 0; i < numArray.length; i++){
		if(numArray[i] < min){
			min = numArray[i];
		} 
	}
	return min;
}

function shortestWord(str){
	var result;
	str = str.split(' ');
	result = str[0];

	for(var i = 0; i < str.length; i++){
		if(str[i].length < result.length){
			result = str[i];
		} 
	}
	return result;
}

function countChar(str, char){
	var result = 0;

	for(var i = 0; i < str.length; i++){
		if(str[i] === char){
			result++;
		}
	}
	return result;
}

function evenLengthWords(str){
	var result = [];
	str = str.split(' ');

	for(var i = 0; i < str.length; i++){
		if(str[i].length % 2 === 0){
			result.push(str[i]);
		}
	}
	return result;
}

function reverseString(str){
	return str.split('').reverse().join('')
}

function keep(array, func){
	var result;
	result = func(array);
	return result;
}

function odds(array){
	var result = [];
	for(var i = 0; i < array.length; i++){

		if(array[i] % 2 !== 0){
			result.push(array[i]);
		}
	}
	return result;
}

function oddLengthWords(str){
	var result = [];
	str = str.split(' ');

	for(var i = 0; i < str.length; i++){
		if(str[i].length % 2 !== 0){
			result.push(str[i]);
		}
	}
	return result;
}
//========You can pass functions in as parameters. Pretty neat stuff :D
console.log(keep([1,2,3,4,5,6,7,8,9,10], evens)); 
console.log(keep('to two three four five bbbb', evenLengthWords));
console.log(keep([1,2,3,4,5,6,7,8,9,10], odds));
console.log(keep('to two three four five bbbb', oddLengthWords));

