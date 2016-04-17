//========================Warm Ups Self Challenge

function billTotal (total){
	var tip = .15;
	var tax = .095; 

	tip = total * tip;
	tax = total * tax;
	total = Math.round((tip + tax + total) * 100) / 100;
	return "Your total comes to " + total;
}

function animals (animal, emotion){
	if (animal ==='cat' && emotion === 'happy'){
		return 'The cat dances with joy!';
	} else if (animal ==='cat' && emotion === 'sad'){
		return 'The cat mopes around';
	} else if (animal ==='cat' && emotion === 'angry') {
		return 'The cat shreds your favorite pair of shoes!';
	}

	if(animal ==='dog' && emotion === 'happy'){
		return 'The dog licks your face!';
	} else if (animal ==='dog' && emotion === 'sad'){
		return 'The dog gives you sad puppy eyes';
	} else if(animal ==='dog' && emotion === 'angry'){
		return 'The dog barks really loud!';
	}
}

function digitalSum(num){
	if(num === 0){
		return num;
	}
	return (num % 10) + digitalSum(Math.floor(num / 10))
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