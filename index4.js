
// FUNCTIONS:

/*

FUNCTION- It is a block of code which performs a particular task in our program.
function can be used anywhere and any number of times in a program.
Basically , functions already contain set of instructions for performing a task in condensed 
form so when we need to perform the same task we actually need not to write that bunch of 
instructions again and again but simply use a suitable function.

Any JS function has 2 main parts- function defintion, function call

function definition- it includes all the instructions of the function which are executed during
call.
function call- using the function by writing function's name. it tells the compiler to execute
the called function at the time it is called.


*/

//function definition

function sum1(a,b)
{
    console.log(a+b)  //void function, no return value
}

sum1(3,4)  // function call


function sum2(a,b)
{
    return a+b  // return type function ,returns a value
}

console.log(sum2(3,4))

// a,b which are used in function definition are known as parameters and the values which are passed to the functions at the time of function call are known as arguments. Here 3,4 are arguments

// funtion expression: assign defined function into some variable

function avg(x,y)
{
    return (x+y)/2
}
var average=avg(3,8) // functional expression

console.log(average)  // function call


/* Anonymous function: a function which is given no name at the time of defintion

function(p,q)
{                      this whole code represenets an anonymous function but we can't use it durong function call becoz it has no name
    return p-q
}


so anonymous function expressions are used ,in which anonymous function is stored in a variable

*/

var difference=function(p,q)
{                     // now this is anonymous function expression
    return p-q
}

console.log("Difference of 2 numbers entered is= "+difference(4,6))