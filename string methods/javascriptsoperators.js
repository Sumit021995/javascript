// JavaScript Assignment Operators
// Assignment operators are used to assign values to variables
let x = 5; // assignment operator
x += 5;// x = x+5 addition assignment
x-= 5;// x = x-5  subtraction assignment
x*= 5;// x = x*5  multiplication assignment
x/= 5;// x = x/5  division assignment
x%= 5;// x = x%5  remainder assignment
x**=5;// x = x to the power 5, x^5  exponential assignment
console.log(x);

let a = 2;
a=a**5;// a=a^5
console.log(a);
// p**q = p^q (p to the power q)

// increment operator
let b = 10;
b++;
console.log(b);
++b;
console.log(b);

let c=15;
// increment
console.log('++c = ', ++c); // x is now 6
console.log('c++ = ', c++); // prints 6 and then increased to 7
console.log('c = ', c);     // 7

// decrement
console.log('--c = ', --c); // x is now 6
console.log('c-- = ', c--); // prints 6 and then decreased to 5
console.log('c = ', c);     // 5


// Comparison operators in JavaScript


// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false


// You can access the characters in a string in two ways.

// One way is to treat strings as an array


const d = 'hello';
console.log(d[1]); // "e"

// Another way is to use the method charAt()


const e = 'hello';
console.log(e.charAt(1)); // "e"

// JavaScript Strings are immutable

// In JavaScript, strings are immutable. That means the characters of a string cannot be changed.


let f = 'hello';
f[0] = 'H';
console.log(f); // "hello"

// However, you can assign the variable name to a new string


let g = 'hello';
g = 'Hello';
console.log(g); // "Hello"

// JavaScript Multiline Strings

// To use a multiline string, you can either use the +operator or the \operator


// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' +
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

console.log(message1);
console.log(message2);

// You can also create strings using the new keyword


const h = 'hello';
const i = new String('hello');

console.log(h); // "hello"
console.log(i); // "hello"

console.log(typeof h); // "string"
console.log(typeof i); // "object"

// Note : It is recommended to avoid using string objects. Using string objects slows down the program.
