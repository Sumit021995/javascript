// Objects literals

const mySymbol = Symbol("key1");

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

console.log(jsUser.email); // kaku.saurav@gmail.com
console.log(jsUser["email"]); // kaku.saurav@gmail.com
console.log(jsUser["Full name"]); // Sumit Saurav
console.log(jsUser[mySymbol]); // mykey1
console.log(typeof(jsUser[mySymbol])); // mykey1

console.log(typeof(jsUser["email"])); // String

