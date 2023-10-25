// Control flow or Logic flow
// if statement
/*
if (condition) {
    
}
*/

// conditions like comparisons
// 2 == 2
// 1 > 0

if (10=='10') {
    console.log(`Here "10" is equal to ${10}`);
}

// node controlflow.js enter // Here "10" is equal to 10
// < , > , >= ,<= , == ,!=,!==, === (equates the data type also)

// if else statement
// if (condition) {
    
// } else {
    
// }

// Both if and if else statement are block scoped
// lets see with example

let score = 200;

if(score > 100){
    const power = 'Fly'
    console.log(`if score greater than 100 ${power}`);
}

// console.log(`if score greater than 100 ${power}`); // error occured here as power is not defined out of the scope{},

// Short hand notation
let balance = 1000;
if(balance>500) console.log('greater than 500'); // Single line implicit code = no return required
if(balance>500) console.log('greater than 500'),  // Multiple line implicit codes is saperated by (,) // Multple line implicit code = no return required
console.log('Greater than 300 also'); // Multple line implicit code = no return required