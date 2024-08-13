

const name="Ayush kumar"
const age=21

const details=`my name is ${name} and i am ${age} years old` // using template literals for concatenation: best practice

console.log(details);

// methods of string object:


console.log(details.length);
console.log(details.toUpperCase());
console.log(details.toLowerCase());
console.log(details.charAt(3)); 
console.log(details.indexOf('n')); // returns index of first occurence of char passed ,if not present -1
console.log(details.lastIndexOf('n')); // returns last index of char passed,if not present -1


const x="  "+details+"                "+"hi"+"   "
console.log(x.trim()); // removes leading and trailing spaces not in b/w


const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

// concat()
// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

console.log(details.includes("Ayush"));   // if yes then true
console.log(details.includes("mnnit")); // else false

// REPLACE:

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"
// similar is replaceAll()

// "xxx".replace("", "_"); output:  "_xxx" if first paramenter is empty or if not present then "no change" occurs

console.log(paragraph.search("Ruth's")); // if found then return first occurence of first char else -1


// SLICE: The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice()); // nothing passed then - orignal string puri return hogi
console.log(str.slice(12));  // when only start is specified- from that index to last index string is returned
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));  // when start and end are specified- from that start index to last index-1 string is returned
// Expected output: "quick brown fox"

console.log(str.slice(-4)); // neg start , end se utne count krke age a jawo and waha se end tak pura 
// Expected output: "dog."

console.log(str.slice(-9, -5)); // neg both, end se utne count krke age a jawo and waha se endindex-1 tak pura 
// Expected output: "lazy"

// if indexStart >= str.length, an empty string is returned.


// SUBSTRING: alternative is substr() but its deprecated now

/*

The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.


const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.


console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"


 */

// SPLIT: The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const st = 'The quick brown fox jumps over the lazy dog.';

const words = st.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = st.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = st.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
