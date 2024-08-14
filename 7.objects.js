
// Objects in JS: non-primitive datatype having data in the form of key-value pairs

const details={}  // this is a syntax of empty obj

const student={
    name:"Aradhya",     // non-empty obj
    age:21,
    married:false
}


// there is one more way of declaring objects (just like ham kartey a rahe hain ek literal se aur dusra constructor se using new key word).

const fruits=new Object()  // this is known as "singleton" object and earlier one was non-singleton obj. 

// accessing values from obj

console.log(student.name);   // using dot operator as objname.keyname (mostly used)

// another method is using []

console.log(student["married"]); // one more thing to note that here we have passed key as string beconz although we don't write key within " " or '' but still in background key is auto processed as string as it was a text.This is same as while declaring variables we don't specify data type but JS is smart enough to auto select the correct data type.

// so we don't specify anything for key but for value we have to specify properly like if its string then write witin quotes or its bool then write as true or false not True/False/TRUE or anything else 


// why to use [] syntax when . is easier ??

const Mysymbol=Symbol('my-sym')  // this is a syntax how we declare symbols
console.log(Mysymbol);

// now if we want to use symbol as a key then we can't use as other data types, we must enclose the key within []

const symb2=Symbol()  // first of all declare key as symbol, it can be empty or any value may be present becoz value will be overwritten inside obj.

const obj1={
    symb1:"**",  // this might look like a custom symbol but actually its type is string when you check
    [symb2]:'*_*', // then use inside obj and assign any value you want
    1:false
}

// now symb2 is a symbol and value in it may be string but it will be treated as symbol

console.log(typeof obj1[symb2]) // since symb2 is not an ordinary key , it can't be accessed using dot operator so this is 
console.log(typeof symb2);  // a use case where we can't rely on dot operator



// console.log(obj1.1) // if we try to do this , then also we get error means

// Note: dot operator works good only if key is string else use [] and this works in all cases no matter what the key data type is and that's why when we use [] in general we put keyname inside it within " " becoz generally we use string type of keys and ofcourse string ko kahi bhi use karo, use within " " likhna hi padta hai.

console.log(obj1[1]); // this works

// but still we use dot operator becoz we mostly use keys as string


// updating values:

obj1[symb2]=true
console.log(obj1[symb2]);

student.age=23
console.log(student.age);


// we can restrict these upations also: using freeze()

console.log(student.name);
// object.freeze(student)   // after using this student obj is no more immutable
student.name="Shanaya"
console.log(student.name);



// merging objects: just like we did in arrays using spread operator , we'll almost use the same syntax here also

const s1={
    name1:"ayush",
    age1:21
}

const s2={
    name2:"simmi",
    age2:23
}

const combined={...s1,...s2}

console.log(combined); 

// ok!! our objects have exatly same name of keys then the obj which is last will override the overlapping keys and its values with its own, so if we would have used simply name and age key in both then simmi obj is comming later in merging so it would have overwritten ayush obj

const b=Object.assign(s1,s2) // this syntax also merges objects
console.log(b); 


// nested objects:


const a1={
    user:userName={
        firstName:'Katherine',
        lastName:'Langford'
    },
    age:30,
    details:personaldetails={
        martialStatus:'unmarried',
        relationship:'complicated',
        talentScore:Infinity
    }
}

console.log(a1.details.relationship); // so its nothing different , normally use dot Operator and go in depth to access a key-value

// many times we get response from database or any API in the form of array of object, so this should also be known to us that how to access values in such cases becoz we'll loop on array and will try to access values very frequently in our projects 

const weather=
[
    location={
        latitude:244.34,
        longitude:345.80
    },

    temperature={
        min:20,
        max:29
    },

    other={
        moisture:humidity={
            min:103,
            max:190
        },
        wind:windSpeed={
            min:'12Kmph',
            max:'23Kmph'
        }
    }

]


// again its very simple, suppose we have to know minimum windspeed and max temp

console.log(weather[2].wind.min); // weather was an array so first access using indexing then we got obj so use dot operator , simple
console.log(weather[1].max);

// some more methods:

console.log(Object.keys(a1.details));  // returns all keys in the form of array
console.log(Object.values(a1.details)); // returns all values in the form of array
console.log(Object.entries(a1.details));  // returns all keys and values in the form of array in which each key value pair is a nested array of size 2 with first element as key and second as value



//  Object destructuring:

const user={
    name:'Ananya',
    email:'an123@gmail.com',
    password:'asd@1231'
}

// till now we know how to acces values from an object using dot notation and all but there is yet smarter way which is used nowadays is object destructuring.

const {email,name,password}=user // this syntax is obj destrutcuring: what happens here is that whatever obj is present on RHS and keys written in LHS , all the values are injected in these keys directly. Order of keys need not to be the same as in obj but ya name of all keys should be consistent to obj key names.

// hence now directly values can be get using keys , no need of dot or any other operator
console.log(name);
console.log(email);
console.log(password);

// we need not to mention all keys, may destructure any speccific key also
const user2={
    name2:'Ananya',
    email:'an123@gmail.com',
    password:'asd@1231'
}
const {name2}=user2

/* just like this we do array destructuring as well whenever needed like we often use this in React hooks

ex.  const [user,setUser]=useState({name:"",email:"",password:""})  */



/* we'll see this often when we'll handle login/signup as :

const {name,email,password}=req.body

there also we are using obj destructring and nothing else. User would have submitted a login/signup form and submit 'request' is made on browser which is client side request, now this request reaches to backend associated with that form, which is server side and there actually we process request as req object in which a lot of details exists but we need only info filled by user in forms body and body is one key in that req so we so we write req.body. Now this is object for use so we destructure this.


agar abhi itni technicalities samjh nahi a rahi then koi baat nahi, ye bas ek ex tha , agey jab khud use karenge tab jan jayenge



*/



// JSON: Javascript object notation

/*

its nothing but a format or a notation used in data handling used over the internet.
actually its widely used nowadays becoz of its compact ,lightweight ,easy to access and use nature. Earlier XML and few more were popular but now JSON rules the monopoly.

actually, talking more specefically JSON is used in data carried by "requests made and received over internet".
means no matter what data you send by making a http request but it will be converted to JSON on browser then propagate ,similarly when it reaches destination url then also it is in JSON and to retrieve orig data from it , we convert back to JS object

{
    "name":"abc",
    "id":"242",              // this is JSON syntax, it can be called as an anonymous obj whose key and value both are written as strings
    "alive":"true"
}  


JSON.parse(i/p)  -- converts JSON input to JS obj or array of obj
JSON.stringyfy(i/p)  -- converts JS obj or array of obj to JSON


// internet pe kisi bhi req/API ka data jab parse karte hain to wo mostly JS obj milta hai ya fir array of JS obj. Hence above 2 methods JSON.parse() and JSON.stringyfy() are very frequently used in web dev


*/
