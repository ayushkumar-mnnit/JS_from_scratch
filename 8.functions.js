
// Functions in JS:


// function is a bunch of instructions or line of codes wrapped up together which can be re-used.This increases code readability,and makes easy to debug

function myFunction()
{
    // this is a typical syntax of function in js
}

// region within { } is known as scope of function and all the code of function is written in this scope only, () here parameters are passed, if needed. function keyword, its name and code in its scope , alltogether is known as function definition

// function may or may not have parameters (params) and it may or may not be of return type 


function displayDate() // this is simple function which doesn't have any params
{
    console.log(new Date().toDateString())  // also it doesn't return anything, just prints out the date when invoked
}

displayDate  // this is known as referencing , means function define karne ke baad uska name likhne se we are just refering to the memory location where its defintion is stored 
displayDate() // when we use () after function name then function is called and is known as "invoking". when invoked , code within function is executed 

function sum(num1,num2)  // function define karte time jo () parenthesis me pass kartey i.e. "parameters"
{
    return num1+num2  // this function has params and its returning something , hence its return type 
}

sum(2,4) // this will not print anything becoz function call to hua, usne sum compute karke return bhi kiya response but us response ke sath hamne kuch kiya hi nahi, like no operation.To print we need to console.log it 

console.log(sum(2,4))  // function call/invoke karte time jo () parenthesis me pass kartey i.e. "arguments"


function greet(user="default user")  // setting up default param value
{
    console.log(`Hi, ${user}`)
}

greet()  // if no argument passed then it takes default value 
greet('Ayush')


// now consider a case where we don't know how many arguments user might pass, then how namy params will be in our funcn defn

function cartItems(...item)  // so here we use "rest operator" which is again ...  (same as spread opeartor)
{                            // when it behaves as rest and when as spread depends on usecase only
    return item
}

console.log(cartItems("Puma Shoes","CornFlakes","OpticalMouse")) // now all the arguments passed are returned by funcn in the form of array

// this is very helpful in implementing shopping cart like things where user may add various number of items.And say we have to total the price, then will get the data like this in an array and extract price and sum it up.

// obj and arrays can also be passed as arguments in function
