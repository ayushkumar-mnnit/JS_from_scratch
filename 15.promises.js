
/*  Promise: The Promise "object" represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

any async task is handled by promises.Instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise can be in one of these states:

pending: initial state, neither fulfilled nor rejected (initial state of a promise-waiting)
resolved: A resolved Promise is one that has settled (i.e., no longer pending) but may have been either fulfilled or rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

But we often use resolve only to show successful completeion and reject to show unsuccessful completion. we don't use fullfill

*/


// going ahead we'll direcly handle promises but before that its important to know how to create them and what we can do with them to get a better clarity of promise handling.


// This is creating a promise

new Promise(function(resolve, reject){   // promise is an object so declare it using new keyword
    setTimeout(function(){
        console.log("Async task 1");  // this line will be printed after 2 second nothing new
        resolve() // important to call resolve() or reject()
    }, 2000)

// This is consuming a promise 

}).then(function(){
    console.log("Async 1 resolved");
})

// but if we dont use resolve() then promise will never be completed, it will stay in pending state and will'nt move to .then()block.Similarly, if we dont use reject() then also promise will never be completed and will not move to .catch() block.So we need to specify either resolve() or reject() to get the promise completed and that's the correct way to do it.

// resolve is directly related to "then" and reject is directly related to "catch".


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mr.Bean", email: "ak@example.com"}) // we can pass any kind of data as an argument like array,obj,function
    }, 2000) 
})

promiseThree.then(function(user){  // resolved value will be passed to this function now it can be used
    console.log(user,'from user');
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // as of now we are trying to show error and how reject() and catch() works so we are explictely setting error to true, else we'll get error or success depending on response we received from some request.
        if (!error) {
            resolve({username: "Bob", password: "xcx12"})
        } else {
            reject('ERROR: Something went wrong') // here we can pass error message or error object or error code like any other kind of argument just like we do in resolve.Now we can show error
        }
    }, 2000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username   // we can return value from one then block and catch in another then block- this is called "promise chaining"
}).then((username) => {     // we can chain as many then() blocks as we want and finally use catch() 
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // optional to use



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "xcx12"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 2000)
});

// consuming a promise using async-await ( this is another way of handling promises inplace of then-catch blocks )

async function consumePromiseFive(){
    try {
        const response = await promiseFive   // try catch block is used to handle errors, if you think there can't be errors at any cost 
        console.log(response);    // then try-catch is not required, but its always good practice to use try-catch also. try is similar to 
    } catch (error) {             // "then" of then-catch
        console.log(error);
    }
}     // note that if we dont use "await" then it will not work asyncronously so its important to use it.If function is async the await keyword is required.

consumePromiseFive()


/*
.then() and .catch() (the traditional Promise handling approach)
async and await (a more modern, cleaner way to handle Promises introduced in ES8/ES2017) but both are equally good */



/* Promis.all()

The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason. */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]


/*

Q: What is callback hell?
A: Callback hell refers to the situation where multiple asynchronous operations are performed sequentially, resulting in a series of nested callback functions. This can lead to code that is difficult to read, maintain, and debug.

Q: How can I avoid callback hell in my JavaScript code?
A: You can avoid callback hell by using Promises with then-catch or async/await.So we can also say that promises were introduced to solve this problem.

ex. call back hell

getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      // Do something with the data
    });
  });
});


solution using promises

function getData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      resolve('Data');
    }, 1000);
  });
}

function getMoreData(data) {
  return new Promise((resolve, reject) => {
    // Simulate another asynchronous operation
    setTimeout(() => {
      resolve(data + ' More Data');
    }, 1000);
  });
}

function getEvenMoreData(data) {
  return new Promise((resolve, reject) => {
    // Simulate yet another asynchronous operation
    setTimeout(() => {
      resolve(data + ' Even More Data');
    }, 1000);
  });
}

getData()
  .then(data => getMoreData(data))
  .then(moreData => getEvenMoreData(moreData))
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

 */