 let users = {
    username:'Sumit',
    course:'Js in hindi',
    price:999,
    welcomeMessage:function (){
        console.log(`${this.username} just logged In`);
    }
 }
 users.welcomeMessage(); // Sumit just logged In
 //If we change the username here as
 users.username ='Saurav';
 users.welcomeMessage(); // Saurav just logged In // under object user `username is changed to Saurav so under the context this key takeout the new username`
 
 let usersnew = {
    welcomeMessage:function (){
        console.log(`${this.username} just logged In`);
    },
    username:'Amit',
    course:'Js in hindi',
    price:999
    
 }
 usersnew.welcomeMessage(); // Amit just logged In
 usersnew.username = 'Gaurav'
 usersnew.welcomeMessage(); // Gaurav just logged In
 
 // hence no matter where is the this keyword used , if there is change in username from outside the context the 
 // username is changed 1st then this keyword executes
 // Here value is not hard code so the value is changed

 let userstest = {
    welcomeMessage:function (){
        console.log(`${this.username} just logged In`);
        console.log(this);
    },
    username:'Manas',
    course:'Js in hindi',
    price:999
    
 }
 userstest.welcomeMessage(); // Manas just logged In
 /*
{
  welcomeMessage: [Function: welcomeMessage],
  username: 'Manas',
  course: 'Js in hindi',
  price: 999
}
*/
 userstest.username = 'Manas Bhushan'
 
 userstest.welcomeMessage(); // Manas Bhushan just logged In
 /*
{
  welcomeMessage: [Function: welcomeMessage],
  username: 'Manas Bhushan',
  course: 'Js in hindi',
  price: 999
}
*/ 

console.log(this);// {} // In node environment this represent to empty object 

// in browser console this key is printed in different way
// Window object is most  global object

function one(){
    console.log(this);
}
one(); 
/*
<ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 135.75109994411469,
        nodeStart: 1.4567999839782715,
        v8Start: 6.2200000286102295,
        bootstrapComplete: 59.06120002269745,
        environment: 30.459800004959106,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1697995879457.304
    },
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
  } 
  */


  //In a function if we use this key in between same middle bracket then result is undefined

  function two(){
    let username = 'Sumit'
    console.log(this.username);
  }
  two(); // undefined // As here username is declared but its value is not read here
  // From here we see 'this' key is only working under object 

  // New function Syntex

  let newFunction = function(){
    let username = 'Amit'
    console.log(this.username);
  }
 // just to make an arrow function we just need to put ' => ' between small bracket and middle bracket or say
 // between paranthesis and scope realted brackets

  let newFunction1 = () => {
    let username = 'Gaurav'
    console.log(this);
  }
  newFunction1();// {} // As shown out of the function that this keyword shows empty object 
  console.log(this); // {} same as in arrow function shown above

  // Basic arrow function
  const addTwoNumbers = (num1,num2) => {
    return num1+num2;
  }
  console.log(addTwoNumbers(2,5));// 7
  
  // Some other syntex of arrow function 
  // New syntex known for implisit return
  
  const addthreeNumbers = (num1,num2,num3) => num1+num2+num3 // single line arrow function syntex , No of return statement and bracket {}
  console.log(addthreeNumbers(2,5,7));// 14 
  
  const addthreeNumbers1 = (num1,num2,num3) => (num1+num2+num3) // single line arrow function syntex , No of return statement and bracket {}
  // no need of return keyword in small brackets  ,()=small bracket
  // return keyword required when middle bracket is used ,{} =middle bracket
  console.log(addthreeNumbers1(2,5,11));// 18 

  // So implicit return mean there is no need of return keyword to return any thing from an arrow function as shown above
  // In explicit return we need return keyword

// If we need to return an object as an output without using return keyword we need to use small bracket ().

const returnNumberstring = () => ({numberstring:'Two'}) // single line arrow function syntex , No of return statement and bracket {}
console.log(returnNumberstring());// { numberstring: 'Two' }

const returnNumber = () => { numberstring:'Two'} // single line arrow function syntex , No of return statement and bracket {}
console.log(returnNumber());// undefined

