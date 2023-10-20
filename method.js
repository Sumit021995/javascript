function replaceUpperCase(str){
    return str.replace(/a/g, 'm').toUpperCase();
}
console.log(replaceUpperCase("sumit saurav"));

function firstLetterUpperCase(str){
  let b = str[0].toUpperCase();
  console.log(b);
  let a = str.slice(1);
  console.log(a);
  let c = b.concat(a);
  console.log(c);
  

}
firstLetterUpperCase("my name is sumit")

function firstLetterUpper(str){
  return str[0].toUpperCase()+str.slice(1); 
}

console.log(firstLetterUpper('sumit is my name'));


let numberNew = 23.8972;
console.log(numberNew.toPrecision(2));//24
console.log(numberNew.toPrecision(1));//2e+1=20
console.log(2e+1);//20
console.log(2e-1);//0.2

let hundreds = 1000000;
console.log(hundreds.toLocaleString());//10,00,000 ,as location is india so its showing same result // by default it is American 1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// In crome browser console if we write 
console.log(Number.MAX_VALUE);//1.7976931348623157e+308 = 1.7976931348623157 * 10^308
console.log(Number.MIN_VALUE);//5e-324= 5* 10^324
console.log(Number.MAX_SAFE_INTEGER);// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);// -9007199254740991

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 = absolute value of (-4)
console.log(Math.abs(4)); // 4
console.log(Math.random()); // range between [0.9,0]
console.log(Math.ceil(4.6)); // 5 = ceiling or above integer value
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,6,8,10,2)); // 2
console.log(Math.max(4,6,10.8,10.9)); // 10.9
 
let min = 20;
let max = 50;

console.log(Math.floor(Math.random()*( max - min + 1 ) + min));
console.log(Math.floor(Math.random()*( max - min + 1 ) + min));
console.log(Math.floor(Math.random()*( max - min + 1 ) + min));
console.log(Math.floor(Math.random()*( max - min + 1 ) + min));
console.log(Math.floor(Math.random()*( max - min + 1 ) + min));


function lengthOfLastWord(str){
  // remove extra space before 1st and after last word of string
  let trimStr = str.trim();
  console.log(trimStr);
  // split string with space to saperate each word
  let splitStr = trimStr.split(" ");
  console.log(splitStr);
  // get the last word from the array of words.
  let lastWord = splitStr[splitStr.length-1];
  //return the length of the last word
  return lastWord.length;
}
console.log(lengthOfLastWord("My name is Sumit Saurav"));
