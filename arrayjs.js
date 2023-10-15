//You can create an array using two ways
//1. Using an array literal

// The easiest way to create an array is by using an array literal []

const array1 = ["eat", "sleep"];
console.log(array1);
// Using the new keyword
const array2 = new Array("eat", "sleep");
console.log(array2);

// Some examples of arrays



// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

// You can also store arrays, functions and other objects inside an array


const newData1 = [
    {'task1': 'exercise'},//object
    [1, 2 ,3],//array
    function hello() { console.log('hello')}//function
];

// You can access elements of an array using indices (0, 1, 2 …).


const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"
