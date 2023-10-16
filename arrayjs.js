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


let newArray1 = [1,2,3,"Sumit",true,{Age:28}]
let newArray2 = new Array(1,2,3,"Saurav",false,{Friend:"vivek"})

console.log(newArray1); // [ 1, 2, 3, 'Sumit', true, { Age: 28 } ]
console.log(newArray1.length); // 6 = 6 elements available here

console.log(newArray2); // [ 1, 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

console.log(newArray2.length); // 6 = 6 elements available here

console.log(newArray2.indexOf("Saurav")); // 3

console.log(newArray2.push(3)); // 6 = 6 elements available here

console.log(newArray2.length); // 7 = one element 3 is pushed so one total elements become 7

console.log(newArray2); // [ 1, 2, 3, 'Saurav', false, { Friend: 'vivek' }, 3 ]

console.log(newArray2.pop()); // 3 or sya its shows the last element popped out of the array

console.log(newArray2.length); // 6 as one element popped out

console.log(newArray2); // [ 1, 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

console.log(newArray2.shift()); // 1 , It shows the 1st element removed from the array

console.log(newArray2); // [ 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

console.log(newArray2.unshift(10)); // 6, It shows number of elements in an array after adding 10 in the array at 1st position

console.log(newArray2.unshift(10)); // [ 1, 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

let a = newArray2.unshift(10)

console.log(a);// 8 = number of elements of an array

console.log(newArray2); // [ 10, 10, 10, 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

console.log(newArray2.includes(10));// true

console.log(newArray2.includes(8)); // false

console.log(newArray2.indexOf(8));// -1 (As 8 is not in the array so it represent -1 )

console.log(newArray2.indexOf(10)); // 0 , It shows the 1st index tha matches the element 

console.log(newArray2); // [ 10, 10, 10, 2, 3, 'Saurav', false, { Friend: 'vivek' } ]

let newArray3 = newArray2.join(); // joins to arrays as a string

console.log(newArray3); // 10,10,10,2,3,Saurav,false,[object Object]

console.log(typeof newArray3); // String

console.log(newArray3.length); // 41 // as every , [ ] is converted into string 

// slice & splice methods 

let myArr = [1,2,3,4,5,6,7,8,9];

console.log(myArr);// [1,2,3,4,5,6,7,8,9]

let myArr1 = myArr.slice(1,3)

console.log(myArr1);// [2,3]

console.log(myArr);// [1,2,3,4,5,6,7,8,9]

let myArr2 = myArr.splice(1,3);

console.log(myArr2);// [2,3,4]
console.log(myArr);// [1,5,6,7,8,9]
 // the splice method splits the original array into 2 different arrays and change the original array as given above




