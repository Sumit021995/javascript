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