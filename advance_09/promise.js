// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// Description
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// syntex

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });

//   myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);

// promise creation part 

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Promise is resolved');
        resolve();
    },1000)
    
})

promiseOne.then(function () {
    console.log('Promise consumed');
    
})


new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('Async task 2 completed');
    resolve();
},1000)
}).then(function(){
    console.log('Async task 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('Async task 3 completed');
    resolve({username: 'Sumit', email:"xyz@example.com"});
},1000)
})
promiseThree.then(function(user){
    console.log(user); // { username: 'Sumit', email: 'xyz@example.com' }
})


const promisefour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username: 'Sumit', password:"xyz"});
    }else{
        reject('ERROR: Something Went Wrong')
    }

},1000)

})

promisefour.then(function(user){
    console.log(user); // When error is false above then it shows - { username: 'Sumit', password: 'xyz' }
    console.log(user.username); 
    return user.username
}).then(function(username){
console.log(username);
}).catch(function(error){
    console.log(error); // When error is true then otput is " ERROR: Something Went Wrong "
})


const promisefive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username: 'Sumit', password:"xyz"});
    }else{
        reject('ERROR: Something Went Wrong')
    }

},1000)

})

promisefive.then(function(user){
    console.log(user); // { username: 'Sumit', password: 'xyz' }
    console.log(user.username); // Sumit
    return user.username
}).then(function(username){
console.log(username); // Sumit
}).catch(function(error){
    console.log(error); // When error is true then otput is " ERROR: Something Went Wrong "
})