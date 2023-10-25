// IIFE = Immediately Invoked Function expression

// (function)(); semi colon is very necessary here 
// Below function is named IIFE
(function one(){
    console.log('One')

})(); // One


(function two(){
    console.log('Two')

})(); // Two

// Below function is Unnamed IIFE
(() =>{
    console.log('Three')

})(); // Three

((name)=>{
    console.log(`${name} is my name`)
})('Sumit'); // Sumit is my name