// while and do while loop
// syntex

/* 
while (condition) {
    
}
*/
// inilization and increment also required

let index = 0; // initilization
while (index <= 10) {
    console.log(`Value of Index is ${index}`);
    index = index + 2; // increment
}

/*
Value of Index is 0
Value of Index is 2
Value of Index is 4
Value of Index is 6
Value of Index is 8
Value of Index is 10
 */

let myHero = ['hanuman ji','shree ram','shree krishna']
let arr = 0; // initilization
while(arr < myHero.length){
    console.log(`my heros are ${myHero[arr]}`);
    arr = arr + 1; // increment
}
/*
my heros are hanuman ji
my heros are shree ram
my heros are shree krishna
 */


// do while loop
// syntex
// initilization and increment required

/*
do {
    
} while (condition);
*/

let myObject = { username:'sumit', age:28 }
let obj = 0; // initilization

do {
    console.log(`my object keys are  ${(Object.keys(myObject))[obj]}`);
    obj = obj + 1; // increment
} while ( obj < Object.keys(myObject).length );

// Special case of do while loop
let score = 11; // initilization

do {
    console.log(`loop started at ${score}`);
    score = score + 1; // increment
} while (score < 10);

// loop started at 11
// As loop start 1 time then checks the conditions given 