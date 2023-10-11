// In javascript numeric string with + operator gives string type
let result;
result = '4'+ true;
console.log(result);// '4true'
result = '4'+ 2;
console.log(result);// "42"
result = '4'+ null;
console.log(result);// "4null"
result = '4'+ undefined;
console.log(result);// "4undefined"

// numeric string used with - , / , * results number type

result = '4' - '2'; 
console.log(result); // 2
result = '4' - 2;
console.log(result); // 2
result = '4' * 2;
console.log(result); // 8
result = '4' / 2;
console.log(result); // 2



// non-numeric string used with - , / , * results to NaN


result = 'hello' - 'world';
console.log(result); // NaN
result = '4' - 'hello';
console.log(result); // NaN




// if boolean is used, true is 1, false is 0


result = '4' - true;
console.log(result); // 3
result = 4 + true;
console.log(result); // 5
result = '4' + true;
console.log(result); // "4true"
result = 4 + false;
console.log(result); // 4


// null is 0 when used with number



result = 4 + null;
console.log(result);  // 4
result = 4 - null;
console.log(result);  // 4




// Arithmetic operation of undefined with number, boolean or null gives NaN



result = 4 + undefined;
console.log(result);  // NaN
result = 4 - undefined;
console.log(result);  // NaN
result = true + undefined;
console.log(result);  // NaN
result = null + undefined;
console.log(result);  // NaN**


/*JavaScript Explicit Conversion
You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.

In JavaScript, explicit type conversions are done using built-in methods.

Here are some common methods of explicit conversions.

1. Convert to Number Explicitly
To convert numeric strings and boolean values to numbers, you can use Number(). For example*/


// string to number

result = Number('324');
console.log(result); // 324
result = Number('324e-1')
console.log(result); // 32.4
result = Number('324e-2')
console.log(result); // 3.24

// boolean to number

result = Number(true);
console.log(result); // 1
result = Number(false);
console.log(result); // 0


// In JavaScript, empty strings and null values return 0. For example




result = Number(null);

console.log(result);  // 0

result = Number(' ')

console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example




result = Number('hello');

console.log(result); // NaN

result = Number(undefined);

console.log(result); // NaN

result = Number(NaN);

console.log(result); // NaN


// You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example


result = parseInt('20.01');

console.log(result); // 20

result = parseFloat('20.01');

console.log(result); // 20.01

result = +'20.01';

console.log(result); // 20.01

result = Math.floor('20.01');

console.log(result); // 20

// Convert to String Explicitly
// To convert other data types to strings, you can use either String() or toString(). For example


//number to string

result = String(324);

console.log(result);  // "324"

result = String(2 + 4);

console.log(result); // "6"

//other data types to string

result = String(null);

console.log(result); // "null"

result = String(undefined);

console.log(result); // "undefined"

result = String(NaN);

console.log(result); // "NaN"

result = String(true);

console.log(result); // "true"

result = String(false);

console.log(result); // "false"

// using toString()

result = (324).toString();

console.log(result); // "324"

result = true.toString();

console.log(result); // "true"


// Note: String() takes null and undefined and converts them to string. However, toString() gives error when null are passed.

// Convert to Boolean Explicitly
// To convert other data types to a Boolean, you can use Boolean().

// In JavaScript, undefined, null, 0, NaN, '' converts to false. For example

result = Boolean('');

console.log(result); // false

result = Boolean(0);

console.log(result); // false

result = Boolean(undefined);

console.log(result); // false

result = Boolean(null);

console.log(result); // false

result = Boolean(NaN);

console.log(result); // false

// All other values give true. For example



result = Boolean(324);

console.log(result); // true

result = Boolean('hello');

console.log(result); // true

result = Boolean(' ');

console.log(result); // true


// Boolean Coercion Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values. Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false. All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)


// Logical operators: Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

var a = 220;
var b = "Hello";
var c = undefined;
        
a || b    // Returns 220 since the first value is truthy
        
a || c   // Returns 220 since the first value is truthy
        
a && b    // Returns "Hello" since both the values are truthy
        
b && c   // Returns undefined since the second value is falsy
        
if( a && b ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( a || c ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

// Equality Coercion Equality coercion takes place when using ‘ == ‘ operator. As we have stated before**The ‘ == ‘operator compares values and not types.**While the above statement is a simple way to explain == operator, it’s not completely trueThe reality is that while using the ‘==’ operator, coercion takes place.The ‘==’ operator, converts both the operands to the same type and then compares them.

var p = 12;
var q = "12";
p == q // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

var r = 226;
var s = "226";

r === s // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.