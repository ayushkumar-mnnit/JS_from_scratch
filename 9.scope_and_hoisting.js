
// Scope : is nothing but a region in codespace which determines which variables,functions,objects and other data types should be accessible upto where.

/* scope- Global scope and Local/block scope

    {

    }

this represents local space or block space and outside it is global scope, so jahan bhi ye curly braces dikhe i.e. is scope
except objects ke case me, kyunki wo to unki declaration ka part hota hai. baki functions, loops, conditionals and all har jagah { } represents scope

function ke case me local scope ko kayi bar functional scope bhi bol dete hain

*/

const x=2  
let y=3


function sum()
{   var z=6
    let result=x+y
    return result // this will work fine becoz x and y are accessible everywhere in the same prog. file
}

console.log(sum()) 

sum()
// console.log(result); // this will throw error , although x+y is computed and stored in result, but result is declared in block scope hence has a life within that block only

// what about z, if we try to access it will it be accessible.Hona to nahi chahiye becoz its also within functional block ,to uske bahar to error dena chahiye
z=7
console.log(z); // ye kya hua , z to print ho gaya without any error.

/*
see these 3 keyords are having diff behaviour

let and const - block scoped so inko access and modify within that block hi kiya ja sakta hai jisme ye declare hue hain,
b.t.w  const can't be changed becoz it represnt constant. But ya let is used for variables  so it can be modified

var- global scoped and used for variables (as let) so it can be accessed as well as modified in anywhere within the code file
.This is the issue we deprecated using var for variable declaration and use let and const only. Mostly const use karna sahi rehta hai


becoz this is bug prone, very hazardous when multiple people are working on same codebase and someone declared a variable using var inside a function or loop or any if else condn and he is hoping ok no problem if any one else accidently declare a same named variable and set any other value becoz its within that block only, but this is not the case we know since var is global scoped.
issey hoga ye ki koi aur same name se uski value modify kar dega aur wo change har jagah reflect hoga making everything messy


 */

// neseted scope:

function greet(user,num)
{
    const userName=user
    console.log(`Hi,${userName}`);

    if(num!=0) 
    {
        console.log(`you are no. ${num} user, ${userName}`);
    }
    
}

greet("Ayush",1)
greet("Ayush",0)

// so we see code does run properly, even though userName was declared within functional scope we could access it in if() statement becoz kitni bhi nesting ho higher / parent scope ki cheezein child scope hamesha access kar sakte hain