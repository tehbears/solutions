//=====> Arrays are used to store a collection of data; often of the same type. 
	//This construct is useful because we can access data in an array through indexes. 

//================================================Warm Ups
function sum(n) {
  var result = 0;
  while (n > 0) {
    result = result + n;
    n = n - 1;
  }
  return result;
}

function power_iter(base, exponent) {
  var result = 1;
  var count = 0;
  while (count < exponent) {
    result = result * base;
    count = count + 1;
  }
  return result;
}


//=================================================Exercises 
var arr = [1,2,3,4,5];

function first(array){
	return array[0];
}

function last(array){
	return array[array.length - 1];
}

function nth (arr, index){
	return arr[index];
}

function rest(arr){
	return arr.slice(1, arr.length);
}

function last(arr){
	return arr.slice(0, arr.length - 1);
}

function cons(array, x) {
  array.unshift(x);
  return array;
}

function conj(array, x){
	array.push(x);
	return array;
}

function mystery(array) {
  if (array.length === 0) {
    return [];
  }
  return conj(mystery(rest(array)), first(array));
}

function mysteryAdd(array) {
	var total = 0;
  if (array.length === 0) {
    return 0;
  }
  return first(array) + mysteryAdd(rest(array));
}

function mysterySquared(array) {
  if (array.length === 0) {
    return [];
  }
  return cons(mysterySquared(rest(array)), first(array) * first(array));
}

function mysteryEven(array) {
  if (array.length === 0) {
    return [];
  }
  if(array[0] % 2 === 0){
	  return cons(mysteryEven(rest(array)), first(array));
	}
	return mysteryEven(rest(array));
}