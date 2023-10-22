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