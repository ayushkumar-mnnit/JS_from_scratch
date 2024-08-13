
console.log("hello world")

// This is the first JS code , you can run it by writing "node .\index.js" in terminal or directly by run button if code runner extension is installed.


// VARIABLES AND DATA-TYPES:


// in programming languages like C/C++ , we write  "int number=234" then int represents data type of variable-> integer , number-> variable name and 234 as value or data stored in variable "number" but in javascript we write "var number=234"  which means number is variable which stores 234 but doesn't tell what type of data is 234.


var num=234 // (var-> variable or key , number-> variable name , 234-> value)

console.log(num)
console.log(typeof(num))  // typeof() -> can be used for finding the data type of variable.

var myName="Ayush"
console.log(myName)
console.log(typeof(myName))


// Data types in JS: Primitive and Non-Primitve (arrays,objects,functions)

/* primitive data types in JS:

undefined
Boolean
Number
String  (we can use "" and '' both)
Symbol
BigInt (part of modern javascript)
null (it represents 'nothingness' and its type is 'object')  

*/

/* rules for assigning variable names:

1. starting character-> letter,underscore, dollar. Integer can't be used
2. rest characters can be letter,underscore, dollar,integers. spaces and special characters are not allowed.
3.variable names are case sensitive and their is no restriction on the length of name.
4.reserved keywords in JS can't be used


*/


//example:


console.log(5+"23")   // number and string added are not added but concatenated
/*important- bug*/
console.log(5-"23")   // subtraction of number and string returns correct differnce value but that is not expected--> bug
console.log("alice"+"23") // concatenates
console.log("hello"-"world") // returns NaN i.e. not a number
console.log(true-true) // returns 0 becoz true corresponds to 1
console.log(true+true) // returns 2 becoz true corresponds to 1


// Difference between null and undefined.

var a=null   // null means nothing but it is defined as "nothing" i.e. neither number,string,bool,symbol or bigint in short a is nothing.
var b        // undefined means something which is not predefined like here b is a variable but no value is assigned to it which means it can take any value -number,string,bool,symbol,null etc. 


console.log(a)
console.log(typeof(a))  // returns "object" which is another bug in JS becoz null is not a object but a primitive data type
console.log(b)
console.log(typeof(b))  // nothing is both a data type as well as a value which can be stored in a variable


// NaN- Not a number 

/* NaN is a variable in global scope means it can be accesed any where in program globally.
it is a property of global scope. It is used for validation purpose in many forms where a number has to be entered.
*/


var contact =3266482367
var pincode ="Lucknow"

console.log(isNaN(contact))
console.log(isNaN(pincode))

// isNaN() can be used to check whether a valid number is entered by the user or not.If true comes then we can add a pop-up that please enter a valid number


console.log(isNaN(NaN))
console.log(NaN===NaN)
console.log(NaN==NaN)

console.table(["abda",8734,true,undefined,null]);  // to print multiple things together in single console statement

// note: never use var to declare variables, it outdated now (we'll see the detailed reason upcoming in ECMA script/modern JS part), always use let to declare variables.


//                                              CONVERSIONS OF DATA TYPES


// many times in practical case we need to convert data types like when getting some dat from API request will be getting JSON mostly then we need to convert it into some other data type , or say we get some data as string but we know we have to operate on numbers so we'll convert it to number and many such cases exists.

let ax="242"
let bx=true
let cx=null
let dx=undefined

console.table([typeof (ax),typeof bx,typeof cx,typeof dx]);
// now lets convert all in Number

let ax1=Number(ax)
let bx1=Number(bx) // converts to 1 if true and 0 if false
let cx1=Number(cx)  // null converts to 0 as number
let dx1=Number(dx)  // undefined converts to NaN number

console.table([typeof ax1,typeof bx1,typeof cx1,typeof dx1]); 
console.table([ax1,bx1,cx1,dx1]); 


// similarly conversion to Boolean:

/*

empty string--> false
non empty string--> true
null --> false
undefined --> false
number--> 0- false, anyother- true

// similarly conversion to String:


null --> "null"
undefined --> "undefined"
number--> "value of number"


so all data types can be  converted to another but what value is there after conversion that also matters, so check that especially for null and undefined


*/

// why string to number conversion is confusing:

console.log("hello"+" world");  // both strings , simple concatenation
console.log(2+" world");  // first number ,second string - concatenation 
console.log(typeof (2+" world")); 
console.log("hello"+2);  // first string ,second number - concatenation 
console.log(typeof ("hello"+2)); 
console.log(1+2+"1");  // 2 numbers then string- numbers are added then reslut is concatenated with string
console.log(typeof (1+2+"1")); 
console.log("1"+2+1);  // string then 2 numbers - all are concatenated
console.log(typeof ("1"+2+1)); 


// actually what happens is that whatever comes first from "left to right" it is treated as that data type but if string comes at any stage the finally concatenation will occur for sure that's why when 1+2+"1" came then first numbers are treated as numbers b/w + so they got added then result 3 which is indeed a number but now it came  with "1" which is string so conatenated.On the other hand "1"+2+3 had string as first argu. so it conactenated with next and formed "12" then this is again a string so conactenated with 1 and resluted as "121"