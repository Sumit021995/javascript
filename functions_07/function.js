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

// let condition like shoping cart that items may add in future and we just need to add up the total price of added items

function calculateCartPrice(num1){
    return num1;

}
console.log(calculateCartPrice(20));//20
console.log(calculateCartPrice(200,400,600));//200 here other two values are not returned here 
// So to take these values in use we use rest operator just as spread operator i.e = ... example (...num1)

function calculateCartPrice1(...num1){
    return num1;

}
console.log(calculateCartPrice1(20,40,60,80));// [ 20, 40, 60, 80 ] so here we get the arguments in an array format

//One more example

function calculateCartPrice2(v1,v2,...num1){
    console.log(v1+v2);
    return num1;

}
console.log(calculateCartPrice2(20,40,60,80));// [ 60, 80 ] so here we get the arguments in an array format ,v1 And v2 are used as another variable 

const user = {
    username: "Sumit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));