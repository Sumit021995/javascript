let mynums = [1,2,3,4,5,6,7,8,9,10];

// array.map() method 
// this method is used to use operations on elements of an array

myNewNums = mynums.map((num)=> num + 10 )
console.log(myNewNums);

//   [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// chaining method where we use multiple methods at the same time 
// lets see with an example

myNewNums1 = mynums.filter((num)=> num > 4).map((newnum) => newnum + 10 );
console.log(myNewNums1); // [ 15, 16, 17, 18, 19, 20 ]

 let myNumers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumers
                .map((num) => num * 10 ) // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                .map( (num) => num + 1) // [ 11, 21, 31, 41, 51, 61 71, 81, 91, 101 ]
                .filter( (num) => num >= 40) // [ 41, 51, 61 71, 81, 91, 101 ]

console.log(newNums); // [ 41, 51,  61, 71, 81, 91, 101 ]
    
    // filter for boolean
    // map for operation 

    // array.reduce() method

  let myNumers1 = [1,2,3,4,5,6,7,8,9,10]

  

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = myNumers1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 55

// reduce work as 
// accumulator first value is = initialValue ( given 0 here )
// current value is the value of an element of an array
// current value changes as per element of an array
// reduce method done the operation such as 
// accumulator = accumulator + currentValue
// accumulator = 0 + 1;
// new accumulator value = 1 + 2;
// new accumulator value = 3 + 3;
// new accumulator value = 6 + 4;
// new accumulator value = 10 + 5;
// new accumulator value = 15 + 6;
// new accumulator value = 21 + 7;
// new accumulator value = 28 + 8;
// new accumulator value = 36 + 9;
// new accumulator value = 45 + 10;
// final accumulator value = 55

// new example 
let newArray = [5,10,20,30,50,80];
let sumAll = newArray.reduce((accumulator,currentValue)=> {
    console.log(`accumulator value = ${accumulator} & current value = ${currentValue}`);
    return accumulator + currentValue;
},0)

console.log(sumAll); // 195

/*
 Output of console.log(`accumulator value = ${accumulator} & current value = ${currentValue}`);

accumulator value = 0 & current value = 5
accumulator value = 5 & current value = 10
accumulator value = 15 & current value = 20
accumulator value = 35 & current value = 30
accumulator value = 65 & current value = 50
accumulator value = 115 & current value = 80

*/
