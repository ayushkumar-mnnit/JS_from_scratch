
// Date and Time objects in JS:

/*

A date is represented internally as a single number, the timestamp. When interacting with it, the timestamp needs to be interpreted as a structured date-and-time representation. There are always two ways to interpret a timestamp: as a local time or as a Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. The local timezone is not stored in the date object, but is determined by the host environment (user's device).

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

*/


// Date When called as a constructor, returns a new Date object. When called as a function, returns a string representation of the current date and time.

const x=new Date()  // called as constructor, so here we get date as obj and can access its methods
const y=Date() // called as function, here we get simple string so no access to methods.
console.log(x);  // date obj returns a timestamp which is the crudest value and we can extract required info using methods on it 
// The maximum timestamp representable by a Date object is slightly smaller than the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9e15)
console.log(x.toLocaleString());  // returns a formated date as string
console.log(y);

// There are two groups of Date methods: one group gets and sets various date components by interpreting the timestamp as a local time, while the other uses UTC.

console.log(x.getDate()); // any method is syntactically same only diff is UTC comes in name if using UTC format 
console.log(x.getUTCDate());  // we hardly use UTC

console.log(x.setDate(12)); // sets the day of the current month to 12
console.log(x.getDate());
console.log((x.getHours())+' Hours');

// sometimes we  may think , why we are given set methods, why would anyone change the date. see we need it in many cases in our apps ex.
//Customization: You can easily adjust dates for scheduling, deadlines, or any time-based calculations


// Date to string format: frequently used

// just like get() and set() can be done either in local or UTC similarly it can be done and almost all methods in here, but we'll use local in 99% of cases where we don't need to specify  local key word in name of method unlike UTC


const myDate=new Date()  // simple timestamp

console.log(myDate)
console.log(myDate.toString());  // string date (by default GMT zone, GMT is diff from UTC)
console.log(myDate.toDateString());  // returns only Date part i.e dayName monthName date yyyy
console.log(myDate.toTimeString());  // returns only time part as per GMT zone

console.log(myDate.toLocaleString()); // returns local format date and time as dd/mm/yyyy, hr:min:sec am/pm
console.log(myDate.toLocaleDateString());  // returns only date part as dd/mm/yyyy
console.log(myDate.toLocaleTimeString());  // returns only date part as hr:min:sec am/pm


// calulation of elapsed time:

// Using Date objects
const start = Date.now();

// The event to time goes here:

const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds


// Using built-in methods
const start1 = new Date();

// The event to time goes here:
const end1 = new Date();
const elapsed1 = end1.getTime() - start1.getTime(); // elapsed time in milliseconds
