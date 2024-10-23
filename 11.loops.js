
// Loops :  Loops in programming are control flow structures that enable the repeated execution of a set of instructions or code block as long as a specified condition is true


// 1. for loop

for(let i=0;i<10;i++){
    console.log(i)  // 0,1,2,3,4,5,6,7,8,9
}


const ar=[1,2,3,4,5,6]

for(let i=0;i<ar.length;i++){   
    console.log(ar[i])  // 1,2,3,4,5,6

}


// while loop

let i=0
while(i<10){
    console.log(i)  // 0,1,2,3,4,5,6,7,8,9
    i++
}


// do while loop

let j=0
do{
    console.log(j)  // 0,1,2,3,4,5,6,7,8,9
    j++
}while(j<10)



// some other looping techniques:  these are part of ES6--- for of, for in, for each,map,filter,reduce


// for of: goes through each element of an iterable and gives a value for each element


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Map vs Object ( This Map is diff from 'map' )


/*
1. Map and Object both contains key value pairs but Map is iterable while Object is not.But Object can be iterated by for in loop.
2. size of Map can be easily accessed using size property while in Object size is not accessible but using Object.keys(objName).length
its possible becoz Object.keys() gives an array of keys.
3. Both Map and object hold unique keys.
4. Keys in Map are ordered and iterated in same order while in Object they were not earlier but now in ES6 they are.
5. Object can have only string or symbol as keys while Map can have any type of keys.
*/


const map = new Map()  // this is a syntax of empty map

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// map.delete('IN')
// map.size


// console.log(map);

for (const item of map) {     // this is a syntax of for of on Map just like other-in each iteration it gives an array of key,value
    console.log(item);          // becoz in a map values are in for key value pair
}


// to get key and value from map in each iteration we can destructure the array in each iteration
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//  so does for of also work on object?? No !!

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


/*

for...of - Use to loop over iterable objects (this obj is not JS object,its a genearal term here) like arrays,strings,Map,Set etc. 
for...in - Use to loop over can be used on iterables and also on "JS objects"

so we use for in loop for iterarting JS objects

*/


// for in: gives keys instead of values directly



const arr3 = ['ayush', 2, 3, 4, 5]

for (let item in arr3) {    
   // console.log(item);    // this will give 0,1,2,3,4 becoz for an array keys are indices like here 0,1,2,3,4
    console.log(arr3[item]);
}


const myObject2 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (let item in myObject2) {
    console.log(item, ':-', myObject2[item]);   // note that here we are using [] notation instead of dot notation becoz that gives
// undefined.
}




// Higher order functions:  function which takes another function as an argument and returns a new function. ForEach,map,filter,reduce

// for each: simply takes a callback function (function without name and passed as param to other function) and in each iteration
// it picks the value from object and passes it to callback.Now value is accessible do what you want.

// works on both JS objects and iterables like arrays

const heros = [
    {
        name: 'Spiderman',
        age: 23
    },
    {
        name: 'Ironman',
        age: 35
    },
    {
        name: 'Thor',
        age: 1000   
    }
]

heros.forEach( (item)=> {
    // console.log(item)  // gives object becoz heros is an array of objects
    console.log(item.name) // gives keys of objects
})


// so till now amongst for of,for in and forEach- best one is forEach


// any loop so far doesnt 'return' anything, we can do our task in each iteration but if we want to store the values of each iteration for later use we then loop must return also so for that we have some higher order functions like map,filter,reduce etc.

const arr5=["shanya","sahil","surya"]


const arr6= arr5.forEach((item)=>{

})

// const arr6= arr5.forEach((item)=>{
//         return item
// })

console.log(arr6)  // gives undefined - you may say since we are using scope i.e.{} so return keyword must be there but then also it will return undefined. similarly other loops or methods learnt till now can't return anything

// but still if want to use simple loops only and store the items then- follow the conventional way 

const result=[]

arr5.forEach((item)=>{
    result.push(item)  // the push() method adds an element to the end of an array
})


console.log(result,'from result')

// now this works fine with all other loops as well but there are some better ways to do it


/* map method: 
In reality, the callback function() is called on each array element, and the map() method always passes the current element , the index of the current element, and the whole original array object to it. so we have 3 arguments in map method- item,index,array but we often use first or first 2 only. Most important thing is that it "returns" new array. */


const arr7= arr5.map((item)=>{   // this is syntax of map method
    // console.log(item);  // this also works 
    return item  // and value can be returned also, which as not earlier
    
})


console.log(arr7)  


// filter method:  takes a callback function as a param and returns a new array with all elements that pass the condition, rest all is same as map.


const arr8= arr5.filter((item)=>{
    // console.log(item);
    return item==="sahil"
})


console.log(arr8)



// reduce method:  returns "single" value, rest all is same as map. Its callback have an additional arguement i.e. accumulator and its first argument, rest 3 are item, index and array as earlier.we can optionally pass an initial value for accumulator.


// .reduce(callback,initialValue) is actual syntax

// accumulator starts with an initial value you provide (or defaults to the first array element) and gets updated with the return value of the reducer in each iteration. Ultimately, the final state of the accumulator becomes the single value returned by reduce() 

const nums=[1,2,3,4,5]

const arr9= nums.reduce((acc,item,)=>{
    console.log(acc);  // here we can verify that acc value when not given starts with first array element i.e. 1
    return acc+item
})

console.log(arr9)

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  
  // Use reduce() with an initial value of 0 for totalPrice
  const totalPriceReduce = products.reduce((sum, product) => {
        return   (sum + product.price)
  },0); // this is where we pass intial value of acc i.e. after callback function


  
  // or const totalPriceReduce = products.reduce((sum, product) => sum + product.price, 0); nothing new, just without return keyword as () are used instead of {}
  
  console.log(totalPriceReduce)

