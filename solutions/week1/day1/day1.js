//calculate your age in minutes in the console
	// 365(days) * 24(hours) = 8,760(hours in a year)
	//8,760(hours) * 60(minutes)
	//525,600(minutes) * 30(years)
	//15,768,000 minutes old 

//percentage of people with brown hair
	//Let's pretend we have  a total of 30 people in the room
	//and only 7 people have brown hair.
		// 7 / 30 = .2333
		// .2333 * 100 = 23.33%

function square(x){
	return x * x; 
}

//2
//square(square(15))
	//The function square(15) is invoked first, and then what it evalutaes
		//to (225) is passed as an argument to the outer function square being
		//invoked which results to 	50625

//3
// Rename the parameter to square in your main.js file to monkey, and rename the uses of that parameter in the body to monkey as well. Will the function square still work? Why or why not?
	//Parameters are only placeholders, it does not matter what you call it
		//although it is best practice to name it something that makes sense
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

//5
// Fix the invalid syntax in the following functions (you can copy and paste these invalid definitions into main.js and then edit them there):

function square1(x) { //===========================missing parens, function not spelled out
  return x * x;
}

function square2 (x){ //==========================missing parens and curly brace, need space between name and function
  return x * x;
}


function square3 (x) { //==========================missing curly brace, parameter in wrong location 
  return x * x;
}

//6
// The following functions exhibit poor style -- fix these issues using the original version of square as a reference.

// function square(x){return x*x;}

function square(x){
	return x*x;
} 

// function square (x) { return x *x;
// }

function square (x){ 
	return x *x;
}

// function square(x)
// {
// return x * x;
// }

function square(x){
	return x * x;
}

//7
// Complete the function cube that returns the cube of x:

function cube(x) {
 // your code here
 return x * x * x;
}

//8
// Complete the function fullName that should take two parameters, firstName and lastName, and returns the firstName and lastName concatenated together with a space in between.

// // don't forget the parameters!
function fullName(firstName, lastName) {
 // your code here
 return firstName + ' ' + lastName;
}
console.log(fullName("John", "Doe")); // => "John Doe"
//==================================================Square Area

//9
// Write a function average that takes two numbers as input (parameters), and returns the average of those numbers.

function average(num1, num2){
	return (num1 + num2) / 2
}

//10
// Write a function greeter that takes a name as an argument and greets that name by returning something along the lines of "Hello, <name>!"

function greeter(name){
	return 'Hello ' + name + '!'
}

function squareArea (s){
	return s * s;
}

//11
// Using the document found at this link, translate the first page of geometric formulas into JavaScript functions.

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

//=========================================Cube Volume

function volumeCube(s){
	return s * s * s;
} 

console.log('volumeCube: ', volumeCube(5));
//=========================================Cube Surface Area

function surfaceAreaCube(s){
	return 6 * (Math.pow(s,2));
}

console.log('surfaceArea: ', surfaceAreaCube(5));

//===========================================Right Circle Cylinder Volume

function righCircleCylinderVolume(r, h){
	// V = PI * (r^2 * h)
	return Math.PI * (Math.pow(r,2) * h);
}

console.log('rightCircleCylinderVolume: ', righCircleCylinderVolume(5, 10));
//=====================================Right Circle Cylinder Surface Area

function rightCircleCylinderSurfaceArea(r, h){
	return ((2 * Math.PI) * (r * h)) + ((2 * Math.PI) * Math.pow(r, 2)); 
}

console.log('rightCircleCylinderSurfaceArea: ', rightCircleCylinderSurfaceArea(5, 10));



//===================================Sphere Volume

function sphereVolume(r){
	return ((4/3) * Math.PI) * Math.pow(r, 3)
}

console.log('sphereVolume: ', sphereVolume(5));
//==================================Sphere Surface Area

function sphereSurfaceArea(r){
	return (4 * Math.PI) * Math.pow(r, 2)
}

console.log('sphereSurfaceArea: ', sphereSurfaceArea(5));

//=============================Right Circular cone volume

function rightCircularConeVolume(r,h){
	return ((1/3) * Math.PI) * (Math.pow(r, 2) * h);
}

console.log('rightCircularConeVolume: ', rightCircularConeVolume(5,10));
//=================Right Circular Cone Surface Area

function rightCircularConeSurfaceArea(r,h){
	return (Math.PI * r) * (r + Math.sqrt(Math.pow(r,2) + Math.pow(h,2)));
}

console.log('rightCircularConeSurfaceArea: ', rightCircularConeSurfaceArea(5, 10));
//===================================Square or Rectangular Pyramid Volume

function squareOrRectangularPyramidVolume(l,w,h){
	return (1/3) * (l * w * h);
}

console.log('squareOrRectangularPyramidVolume: ', squareOrRectangularPyramidVolume(5,5,5));

//===Frustum of Right Circular Cone

function frustumOfRightCircularConeVolume(r, R, h){
	return ((Math.PI * h) / 3) * (Math.pow(R, 2) +(R * r) + Math.pow(r,2));
}

console.log('frustumOfRightCircularConeVolume: ', frustumOfRightCircularConeVolume(5,10,20));

//================Frustum of Right Circular Cone Surface Area

function frustumOfRightCircularConeSurfaceArea(r,R,s){
	return Math.PI * (s * (R + r));
}

console.log('frustumOfRightCircularConeSurfaceArea: ', frustumOfRightCircularConeSurfaceArea(5,10,20));
//==================================================Compound Interest

// F: future value
// P: present value
// i: nominal interest rate
// n: compounding frequency
// t: time
function futureValue (p, i, n , t){
	return p * ( Math.pow ( (1 + ( ( i / 100 ) / n) ), ( n * t ) ) );
}

//==================================================Power Function

function power (b, e){
	if(e === 0){
		return 1; 
	}
	return b * power(b, e -1);
}

// http://www.pballew.net/oldsqrt.htm
function average(num_1, num_2){
   return (num_1 + num_2) / 2;
}

function sqrt(number){
	return average(number/average(number/average((number/10),10),average((number/10),10)),average(number/average((number/10),10),average((number/10),10)));
}
console.log(sqrt(16));
