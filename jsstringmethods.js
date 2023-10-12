// JavaScript String Methods


const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"


// JavaScript String() Function

// The String() function is used to convert various data types to strings


const a = 225; // number
const b = true; // boolean

//converting to string
const result6 = String(a);
const result7 = String(b);

console.log(result6); // "225"
console.log(result7); // "true"

// Escape Character
// You can use the backslash escape character \ to include special characters in a string,character after backslash is ignored

const name1 = 'My name is \'Peter\'.';
console.log(name1);// My name is 'Peter'.


// String operators in JavaScript


// concatenation operator
console.log('hello' + 'world');

let c = 'JavaScript';

c += ' tutorial';  // a = a + ' tutorial';
console.log(c);

// Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// What’s the spread operator?

// The spread operator is also indicated by the ... operator. It’ll spread an object’s property into another object and spread the array entries into another array.

const foo = [1, 2, 3];
const bar = [...foo];
console.log(bar);

// Then we get [1, 2, 3] as the value of bar since we made a copy of foo and assigned it to bar with the spread operator.

// It’s also useful for merging arrays

const foo1 = [1, 2, 3];
const bar1 = [3, 4, 5];
const baz = [...foo1, ...bar1];
console.log(baz);