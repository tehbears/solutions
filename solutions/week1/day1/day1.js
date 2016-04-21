function square(x){
	return x * x; 
}


function monkey(monkey) {
  return monkey * monkey;
}

// function square(monkey) { //===================x is not defined
//   return x * x;
// }

// function square(5) { // =======================unexpected number
//   return 5 * 5;
// };

// function square("x") { //=======================unexpected string
//   return "x" * "x";
// }

function square1(x) { //===========================missing parens, function not spelled out
  return x * x;
}

function square2 (x){ //==========================missing parens and curly brace, need space between name and function
  return x * x;
}


function square3 (x) { //==========================missing curly brace, parameter in wrong location 
  return x * x;
}

//==================================================Square Area

function squareArea (s){
	return s * s;
}

//================================================Square Perimeter

function squarePerimeter (s){
	return 4 * s; 
}


//================================================Area Parallelogram

function parallelogramArea (l, h) {
	return l * h;
}

//===============================================Perimeter Parallelogram

function parallelogramPerimeter (l, w){
	return (2 * l) + (2 * w);
}


//===============================================Area Traapezoid

function trapezoidArea (h, b1, b2) {
	return h * ((b1 + b2) / 2);
}


//===============================================Perimeter Trapezoid 

function trapezoidPerimeter (s1, s2, b1, b2) {
	return s1 + s2 + b1 + b2;
}

//================================================Area Triangle

function triangleArea (b, h){
	return (b * h) / 2;
}

//================================================Perimeter Triangle

function trianglePerimeter (s1, s2, b){
	return s1 + s2 + b;
}

//================================================Area Circle

function circleArea (r){
	return Math.PI * (r * r);
}

//================================================Perimeter Circle

function circlePerimeter (r){
	return (2 * Math.PI) * r;
}

//====================================================Volume Rectangular Solid

function rectangularSolidVolume (l, w, h){
	return l * w * h;
}

//===================================================Surface area rectangular solid

function rectangulareSurfaceArea (l, w, h){
	return (2 * (l * h)) + (2 * (w * h)) + (2 * (w * l));
}

//==================================================Compound Interest

///PRINCIPLE
	//NTEREST 
	//NUMBER of times that is interest is compounded per year, 
	//TIME is the number of years money is invested
function futureValue (p, i, n , t){
	return p * ( Math.pow ( (1 + ( ( i / 100 ) / n) ), ( n * t ) ) );
}

//==================================================Power Funciton

function power (b, e){
	if(e === 0){
		return 1; 
	}
	return b * power(b, e -1);
}

function squareRoot(num){
	


};
