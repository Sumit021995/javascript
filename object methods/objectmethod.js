// Objects literals

const mySymbol = Symbol("key1");
console.log(typeof mySymbol);// symbol

let jsUser = {
    myname:"Sumit",
    "Full name":"Sumit Saurav",
    [mySymbol]:"mykey1",
    age: 27,
    location: "Sitamarhi",
    email:"kaku.saurav@gmail.com",
    isLoggedIn: true,
    lastLoginDay: ["Monday","Saturday"]
}

console.log(jsUser.length);// undefined
console.log(jsUser.email); // kaku.saurav@gmail.com
console.log(jsUser["email"]); // kaku.saurav@gmail.com
console.log(jsUser["Full name"]); // Sumit Saurav
console.log(jsUser[mySymbol]); // mykey1
console.log(typeof(jsUser[mySymbol])); // mykey1

console.log(typeof(jsUser["email"])); // String

// To overwrite any element in object

jsUser.email = "sumitofficial021995@gmail.com"
console.log(jsUser); // As object is Non Primitive Datatype so the orriginal object is changed
/* 
{
  myname: 'Sumit',
  'Full name': 'Sumit Saurav',
  age: 27,
  location: 'Sitamarhi',
  email: 'sumitofficial021995@gmail.com',
  isLoggedIn: true,
  lastLoginDay: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
 */
 // If We want to freeze the object from further changing Object.freeze(Object name)

 Object.freeze(jsUser); // After freezing the object no new changes seen in the object
 jsUser.email = "sumitsaurav@gmail.com" // This overwrite not work as object jsUser is freezed above
 console.log(jsUser);
 /* 
{
  myname: 'Sumit',
  'Full name': 'Sumit Saurav',
  age: 27,
  location: 'Sitamarhi',
  email: 'sumitofficial021995@gmail.com',
  isLoggedIn: true,
  lastLoginDay: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
 */

let newObject ={
    myname: 'Sumit',
    'Full name': 'Sumit Saurav',
    age: 27,
    location: 'Sitamarhi'

}
newObject.greeting = function (){
    console.log("Hello this is New Object");
}
newObject.greeting2 = function (){
    console.log(`Hello this is New Object ${this.location}`);
}
console.log(newObject.greeting); // [Function (anonymous)]
console.log(newObject.greeting()); // Hello this is New Object // and undefined is also printed
console.log(newObject.greeting2()); //Hello this is New Object Sitamarhi // and undefined is also printed
