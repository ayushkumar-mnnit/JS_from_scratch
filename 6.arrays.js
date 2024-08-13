
// Arrays in Js: are linear data structures which can hold multiple items.

/*

unlike other prog lang like C,C++ where arrays can have all items of similar data types here items can be of any data type,
there may be number,bool,string,nested array,objects all together in single array itself.

JS arrays are dynamic by default means they are re-sizable once declared

shallow copy  -only static things are copied , dynamic things are not copied they point to same reference in heap hence any change in one dynamic item will lead to change it in original as well
deep copy -both static and dynamic items are copied hence even after making changes to one of the dyn item , orignal remains entact becoz now a copy of original memory (in heap) is referenced to copied item so its change reflects to copied memory only

and by default in all lang, shallow copy occurs

since Js arrays are dyn hence any copy operation, leads to a situation that if something is changed in copied array then it gets changed in orignal as well

rest all is same as other lang arrays like 0-based indexing, non-primitive data type and  if value doesn't exist at some index then it will give undefined unlike other lang where a garbage value is obtained

*/

// freq. used declaration : literal declaration

const ar=[] // empty array
const num=[134,23,23]  // directly array obj is formed 

// another declaration : constructor declaration

const x=new Array(12,32,4)  // here constructor takes values and converts to array obj , if only one value is passed it takes it as length of array and creates array of that size with all values set to undefined


// Note: in JS we often use these 2 types of declarartions : literal and constructor.

/* we have already used it in string and date and now in arrays and we'll use later also ,so let's clarify this :

literal: static declaration, at interpretion time memory is allocated and  generally it gives primitive data type means memory is allocated
in stack.

constructor: dynamic allocation, uses 'new' keyword and memory is allocated in runtime and it always gives non primitive data type (as obj) means memory is allocated in heap.

** but arrays are allocated in heap in either of declartions used and hence always non-primitive

*/


// important methods in arrays:

const A=[1,3,4,56,7]
console.log(A);
console.log(A.length);
A.push(8) // adds one element at the end
console.log(A);
A.pop()  // removes one element from back
console.log(A);
console.log(A.indexOf(3));  // same as string and a lot other similar methods works here beccoz strings are in background char arrays only
console.log(A.includes(23));

// Slice vs Splice  methods- important 
console.log(A)  // orig array 
const B=A.slice(1,3) 
console.log(B) // sliced arrray o/p , a new subarray from ind=1 to 2
console.log(A) // orig array is not modified
const C=A.splice(1,3)
console.log(C)  // spliced arrray o/p , a new subarray from ind=1 to 3
console.log(A)  // orig array is also modified after splice


// means 2 diff: first one is slice excludes endIndex while splice includes endIndex and second one is slice doesn't modify orig array but splice cuts off that splice portion from orig array so these many elements are no more in orig array.

console.log(A.join());  // removes [] and wraps all the content inside a string


// merging 2 or more arrays 

const fruits=["Mango","Apple","Peach"]
const veg=["Potato","Brinjal","Cauliflower"]
// fruits.push(veg)
console.log(fruits);  // we can't use push() becoz it appends entire array as element in orig array but we want elements to be added


// we can use concat() method works but it returns a new concatenated array so 
const res=fruits.concat(veg)  
console.log(res);  // this gives expected o/p and we can pass as many arrays we want in params

// a better and modern method is "Spread operator" which is simple three dots  ...

const ax=[12,23,34]
const bx=[14,54,230,9]
const res2=[...ax,...bx]  // simply spreads each array in its elements and then returns a new array
console.log(res2);

// but if depth is more means nested arrays then its better to use flat() method before merging

const cx=[23,45,[53,998,["hi",true]]]
const res3=cx.flat(Infinity)  // in param we have to pass a integer ki how much depth you want to resolve, better hai infinity de do wo sab auto adjust kar lega jitna need hoga
const res4=[...ax,...res3]
console.log(res4);



//  all ther looping we need to do in real practices is done on arrays only so , no matter how data is coming we often need to convert it to arrays. so some related methods for this are

const Ar='213413'
console.log(Array.isArray(Ar));  // returns true or false
console.log(Array.from(Ar)); // converts to array from argument passed but if it can't then returns an empty array [] like when we pass entire obj then it can't convert it to array becoz there we need to specify that whether key should be considered for array formation or values of obj passed.
const x1=23
const x2=45
const x3=12
console.log(Array.of(x1,x2,x3));  // form an array of elements passed
