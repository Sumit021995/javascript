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
To convert numeric strings and boolean values to numbers, you can use Number(). For example,*/


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


// In JavaScript, empty strings and null values return 0. For example,




result = Number(null);

console.log(result);  // 0

result = Number(' ')

console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example,




result = Number('hello');

console.log(result); // NaN

result = Number(undefined);

console.log(result); // NaN

result = Number(NaN);

console.log(result); // NaN


