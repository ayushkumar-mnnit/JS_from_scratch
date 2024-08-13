
// CONDITIONAL (CONTROL) STATEMENTS AND LOOPS:

/*
CONDITIONALs~ executed when a condition is met
1. if-else 
2. switch-case
3. ternary

LOOPs~ keep on executing until a termination condition is met
4. While
5. do-while
6. for-in
7. for-of

*/


console.log("if-else example")

var cash=4200

if(cash>2000)
{
    console.log("Take your girlfriend outside for dinner")
}
else if(1000<cash<2000)
{
    console.log("party with friends")

}
else
{
    console.log("thank god and invest your time in studies")
}


var area="square"
var r=5
if(area=="circle")
{
    console.log("area of circle is="+3.14*r**2)
}
else if(area=="square")
{
    
    console.log("area of square is="+r**2)
    
}



// truthy and falsy in JS:

/* 

0," ",undefined,null,NaN,false ----> these all are termed as falsy in JS.

we know if(true)--> "if" executes and if(false)--> "if" doesn't executes

in C/C++ we have only one false value and i.e. 0 , so "if" executes for all non-zero values

but in JS there are 5 false values-->known as falsy. So execution occurs for all truthy values i.e. except falsy

*/

console.log("ternary example")

var age=19
console.log((age>=18)?"you can drive":"you can't drive")  // ternary operator: only operator in JS which takes 3 arguements


console.log("switch-case example")


var n=6
switch(n)
{

    case 1:
    console.log("mango")
    break
    case 6:
    console.log("avacado")
    break

    default :
    console.log("Mixed fruit")
    break

}




/* while loop:

syntax:

intialisation;
while(condition){
    task to be done;
    updation;
}

Note: if termination condition is not used then loop will execute until whole
memory of the system is occupied or  till infinity ,such loops are infinite loops.*/


/* do-while loop:

syntax:

intialisaton;
do{
    task to be done;
    updation;
}
while(condition);

Note: in 'for' and 'while' loops firstly condition is checked then task is done but
in 'do-while' loop firstly task is done then conditon is checked.
so do-while loop gives output atleast once whether condition is true or not but while loop will not give any out put if condition is not true

*/

console.log("\nloop control statements\n")
console.log("while-loop")
var p=5
while(p<=10)
{
    console.log(p+"\n")
    p++
}



console.log("do-while-loop")

var p=11
do
{
    console.log(p+"\n")
    p++
}while(p<=10)


/* for loop:

syntax:

for(initialisation;condition;updation){

}

initialisation condition or declaration statement -initial condition for the starting of loop.
condition-loop will run until this condition is met.
updation- initial condition modifies according to this condition.

*/

console.log("for-loop")
var n=21
for(var i=1;i<=10;i++)
{
    console.log(n+" X "+i+" = "+n*i)
    console.log("\n")
}