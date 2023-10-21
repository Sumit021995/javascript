// function is studied along with its memory management
// multiple codes in a package is called a function , function used its copies when we call it
//syntex
// function <function name>(){ }
// () =  parenthesis
// {} =  scope
// Example
 
function callMyName(){
    console.log('Sumit');
}

//callMyName = function reference
// () = function execution  
// in further studies at (On click DOM manipulation) or further studies in react

function sumOfTwoNumbers(num1,num2){
    console.log(num1+num2);
}
//num1 & num2 are parameters
// 1,4 are arguments
sumOfTwoNumbers(1,4);
// If we print any value in function from console.log() It does not mean it returns the value to store in a new variable
let result = sumOfTwoNumbers(2,5);
console.log(result);// undefined // here function is not returning any value so it can not be stored 

function divideTwoNumber(num1,num2){
    return num1/num2;
}
let result2 = divideTwoNumber(24,6);
console.log(result2);// 4 // it stores the value as the function return the value 
// Important note :- no code will execute after return in a function

function multiplyTwoNumber(num1,num2){
    return num1*num2;
    console.log('Sumit');
}
let result3 = multiplyTwoNumber(24,6);
console.log(result3);// 144 // it stores the value as the function return the value after returning the value no code is executed
// as we do not see the console fuction

function loggedInPassMessage(username){
    return `${username} just logged in`
}
console.log(loggedInPassMessage()); // `undefined just logged in`
console.log(loggedInPassMessage("Sumit")); // `Sumit just logged in`

function loggedInPassMessage1(username='Sam'){
    return `${username} just logged in`
}
console.log(loggedInPassMessage1()); // `Sam just logged in`
console.log(loggedInPassMessage1("Sumit")); // `Sumit just logged in` // in this situation argument is overwrited

