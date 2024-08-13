
// EXPRESSIONS AND OPERATORS:

/* 

5+3=8 is as whole a mathematical expression.
5,3 are opearands on which operation is to be performed
+ is a operator which performs some opertaion on operands 5 and 3
8 is also an operand and = is also an operator which is used for assigning RHS to LHS, w'll see this 


IN javascript there are 6 operators:

Assignment          =
comparision         > , < , != , >= , <= , ===
Arithematic         + , - , * , / , %
Logical             && , || , !
String
Conditional(Ternary)

*/

var x=15
var y=15
console.log(x==y)
console.log("Is x and y are equal"+x==y) // returns false which is a problem of conventional javascript becoz it was expected to conactenate string and bool value.This problem is sorted by ecmascript 2015 (modern JS)

console.log(`Is x and y are equal:${x==y}`)

console.log("EXamples of Arithematic operators")

console.log(3/5)  // division returns actual ans not just greatest integer value as in case of C/C++ 
console.log(-3/5)
console.log(3%5) // numerator<denominator then---> modulo returns numerator as ans
console.log(-3%5)  
console.log(-6%5)   
console.log(2*5)   // multiply
console.log(2**5)   // 2 raised to power 5


/* Increment and decrement operators are also arithematic uniary operators:
 
x++  post increment
++x  pre increment
x--  post decrement
--x  pre post decrement
   
*/
console.log("EXamples of Increment-decrement operators")
var x=2
console.log(x++)  // prints 2 only then increases by 1 , now x=3 for next operations
console.log(++x)  // x=3 from previous and due to pre-increment it increases x by 1 then prints so prints 4
console.log(x--)  // again prints 4 then decreases by 1 and now x=3 again for next operations
console.log(--x)  // x=3 from previous operation and now decreaes by 1 then prints so prints 2 again.


console.log("Examples of comparison operators")
console.log(5==5)  // returns true becoz == checks only value
console.log(5=='5')  // returns true becoz == checks only value
console.log(5==='5') // returns false becoz === checks value as well as their data type: known as "strict check"
console.log(5!=4)
console.log(5>6)
console.log(5<8)
console.log(5>=3)
console.log(5<=5)

console.log("Examples of logical operators")
var m=2
var n=4
console.log(m>n || n>m)
console.log(m>n && n>m)
console.log(!(m>n && n>m))


console.log("EXamples of concatenation(string) operators")

console.log("full"+"name")
console.log("full "+"name") // to give spaces just give spaces within ""
console.log("full"+" name")
console.log("full" + "name")  // spaces don't work outside ""


// example:

console.log("examples~")

console.log(2**5) // retrurn 2 raised to the power 5 , ** is exponentiation operator

var a=3
var b=7
// swap without using 3rd variable and any other number except a and b:
console.log("Before swapping: ")

console.log("a = "+a)
console.log("b = "+b)

var a=a+b
var b=a-b
var a=a-b

console.log("After swapping: ")

console.log("a = "+a)
console.log("b = "+b)




