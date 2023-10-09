function reverseString(str){
    let reverse= "";
    console.log(str.length);
    for(let i =1; i<=str.length;i++){
        
        reverse += str[str.length-i];
        
    }
    console.log(reverse);
}

reverseString("My name is sumit");