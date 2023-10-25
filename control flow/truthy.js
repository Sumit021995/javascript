let userEmail = 's@gmail.com';

if(userEmail){
    console.log('User logged in');
}else{
    console.log('dont have user email');
}

// here userEmail is a string so its true as a condition so if statement is printed that is
// User logged in


let userEmailnew = '';

if(userEmailnew){
    console.log('User logged in');
}else{
    console.log('dont have user email');
}

// here userEmail is an empty string so its false as a condition so else statement is printed that is
// dont have user email     

// There are some values to be true or false . That are known to be as Truthy Value and Falsy value

// Falsy Values are
// false(boolean),0,-0,BigInt 0n,"",null,undefined,NaN(not a number)

// Truthy Values are
// "0","false"," "(string with a space is also truthy value),[],{}, function(){}


// To check if array is empty or not 

let myArray = [];
if(myArray.length === 0){
    console.log('myArray is an empty array');
}
// To check if object is empty or not 

let myObject = {};
if(Object.keys(myObject).length === 0){
    console.log('myObject is an empty Object');
}

// Some important conditions 
// false == 0 // true
// false == "" // true
// "" == 0 // true


// Nullish Coalescing operator  ?? : based on null and undefined

let value1 ;
value1 = 5 ?? 10 // 5
value1 = null ?? 15 // 15
value1 = undefined ?? 11 // 11
value1 = undefined ?? 8 ?? 12 // 8 , first definite value is assigned 
console.log(value1); // 8

// terniary operator ?
// Syntex 

// condition ? true : false 

let iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log('price is greater than or equall to 80') : console.log('Price is less than 80');
// price is greater than or equall to 80
iceTeaPrice >= 110 ? console.log('price is greater than or equall to 110') : console.log('Price is less than 110');
// Price is less than 110







