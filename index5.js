
// MODERN JAVASCRIPT (ECMA-SCRIPT):

/*
The full form of ECMA is European Computer Manufacturer's Association. ECMAScript is a Standard for scripting languages such as JavaScript, JScript, etc. It is a trademark scripting language specification. JavaScript is a language based on ECMAScript

JS was devleoped in 1996 but when it became popular then its standardisation was needed which was done in 1997 under ECMA, by then it came to be known as ECMAscript.

Then its 6 updated versions came till 2015, but the 2015 version popularly known as ECMA-script2015 or ES-6 became most popular
becoz it made various useful changes and the introduction of "Arrow function" was the most important feature of ES-6

now versions ES-7,ES-8,ES-9,ES-10,ES-11,ES-12 (from 2016-2021) have came till now


so in modern JS we mainly focus on ES-6

*/

//Modern JS includes: let-const keywords,template literals,default arguments,rest operators,destructuring,object properties,arrow function,spread operators.


// 1. let vs const vs var keywords in :

/* let and const are part of modern JS,

let : block scope--> can't change outside a particular block

var : global scope or functional scope--> if defined globally then can be used and modified anywhere in the program but if defined within a function then can be used and modified within that function only.

const : block scope--> can't change once declared even inside that block also

*/

// defining variable globally:
var x=5 
console.log(x)  // accessible outside anywhere in the program
x=3
console.log(x)  // accessible and modified, outside anywhere in the program

function sum()
{
    console.log(x) // accessible within function also
    x=7     // modified within function also
    console.log(x)
}
sum()

//defining variable within a function specifically will restrict its access and modification within the function only 


function sum1()
{   var y=4
    console.log(y) // accessible within function
    y=8     // modified within function 
    console.log(y)
}
sum1()

// console.log(y)   this gives error becoz y is having a function scope only

// let- has a block scope so it can not be accessed and modified outside a specific block.That's why it is an improved version of var keyword for declaration becoz this prevents accidental modifictions in the program




{
    let c=23
    c=5
    console.log(c) // access and modification possible within the block
}

// console.log(c)  access and modification not possible outside the block once defined within the block

let d=9
//  let d=8     redeclaration is not allowed in let but allowed in var
console.log(d)


// const- all properties same as let but additionally user can't change its value

// const m  --> using without initialisation is not allowed but allowed in var and let



/*

In a nutshell main differneces among var,let,const are:

var- global/function scope, can be accessed and modified within the scope (globally declared-use and modify globally but declared within a function then use and modify within that function only). redeclaration allowed,use without initialisation allowed

let-block scope,can be accessed and modified within the scope i.e. within the block only. redeclaration not allowed,use without initialisation allowed.

const-block scope,can be accessed but can't be modified within the scope i.e. within the block only. redeclaration not allowed,use without initialisation not allowed

*/



// 2.Template literlas (strings):


console.log("sum of 3 and 4 is = "+(3+4))
console.log(`sum of 3 and 4 is = ${3+4}`) // concatenation of string becomes easy using template literals

// 3. Default arguments: these are the default values passed to the parameters when sufficient arguments are not passed to the function during function call.


function sum2(a,b=6) 
{
    console.log(a+b)
    
}
sum2(4) // here 2 arguements need to be passed but only 1 given so this will go to parameter a and b act as default argument

// 4. Fat arrow function: => symbol is known as fat arrow 

//example:

let sum3=(a,b)=>
{   

    return `The sum is=${a+b}`

}

console.log(sum3(2,64))

// if single value is to be returned then ,return keyword can be removed and curly braces as well so above function can be reduced as 

let sum4=(p,q)=> `The sum is=${p+q}`
console.log(sum4(5,6))

// if single parameter is to be passed then parenthesis can be removed as

let square=n=>`Square of entered number is=${n**2}`

console.log(square(5))