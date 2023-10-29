let obj = {username : 'Sumit Saurav', isLoggedIn : false, age : 28}

for(let key of Object.keys(obj)){
    console.log(key);

}

// username
// isLoggedIn
// age

// for in loop on objects
// syntex 
/* 
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

for (let key in obj){
    console.log(key);

}

// username
// isLoggedIn
// age

for (let key in obj){
    console.log(obj[key]);

}

// Sumit Saurav
// false
// 28

