function titleCase(str){
let allCharLower = str.toLowerCase();
 let stringarr = allCharLower.split(" ");
//  console.log(stringarr);
 for(let i=0; i< stringarr.length; i++){
    stringarr[i] = stringarr[i][0].toUpperCase() + stringarr[i].slice(1);
 }
 console.log(stringarr.join(' '));
}

titleCase("my name is sumit")
