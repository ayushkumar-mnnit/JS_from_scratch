
// Number and "Math library" in JS:

const num=24.13132  // again this is primitive number
const num2=Number(100000) // also similar to above one, the only thing is that it strictly ensures that num2 always hold a number data type
const n=new Number(12)  // its a number object

// we preferably use first syntax in practice becoz all methods of Number can be accessed easily using primitive number also (as it was in string literals)

// some methods of Number:

console.log(num.toFixed(3)); // simply fixes digits after decimal
console.log(num.toPrecision(3)); // returns result containing given number of significant digits
console.log(num.toString()); // converts to string
console.log(n.valueOf()); // returns primitive value of object (this works for others as well like string object and all)
console.log(num2.toLocaleString()); // returns number in US or international system
console.log(num2.toLocaleString('en-IN')); // returns number in Indian system
console.log(num2.toExponential()); // converts to standard exponential notation
console.log(num.toPrecision(1)); // when precision value is less than minimum significant digits then also converts to exponential


//  Math library:

console.log(Math);  // this shows in console as object but methods don't appear as such, log it in browser's console to see all the methods under this library

console.log(Math.abs(-13)); // returns absolute value
console.log(Math.max(232,24,-113,0,13,139)); // returns max value
console.log(Math.max(232,24,-113,0,13,139)); // returns min value
console.log(Math.pow(2,5)); // returns 2^5 value
console.log(Math.ceil(12.22)); // returns smallest integer value value >= value passed
console.log(Math.floor(12.22)); // returns greatest integer value <= value passed
console.log(Math.round(12.22)); // returns round of value to nearest integer
console.log(Math.sign(24)); // returns 1,-1,0 for pos,neg and 0 value respectively: its signum basically so tells the sign only, nothing to do with magnitude

// and a lot of more useful methods exists which can be used as per need.One such frequently used method is random()

console.log(Math.random()); // returns a random value b/w 0 and 1 (excluding both)

// ex. we can use this in many cases like making any game of dice we need to have numbers b/w 1 and 6 only.

const max=6
const min=1

const x=Math.round(Math.random()*(max-min))+1 
console.log(x); // now every time a random integer number b/w [1,6] is generated 