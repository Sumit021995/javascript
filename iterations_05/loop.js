// for loop 
// for loop syntex
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/


let array = [1,5,6,8,9,2,4]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

// Another example
 for (let i =0; i<10; i++){
     if(i==5){
        console.log("5 is best number");
     }
     console.log(i);
 }

 // 
  for(let i = 1; i<=10; i++){
    for (let j = 1; j <= 10; j++) {
        console.log(`inner loop value ${j} & outer loop value ${i}`);
        
    }

  }
 // Multiplication Table (Maths Table)
 // loop under loop 
  for(let i = 1; i<=10; i++){
    console.log(`Multiplication Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(` ${i} * ${j} = ${i*j}`); 
    }
    
  }



  // break and continue keywords in loop

  for (let index = 0; index <= 10; index++) {
    if (index == 5){
        console.log('5 detected');
        break;
    }
    console.log(`value of index is  ${index}`);
    
  }
  
  // In break keyword it come out of the loop when break statement is written
  // this case also used in switch case statement 
  
  // continue statement in loop
  // continue statement states that after continue keyword further code is skipped for just 1 time
  
  for (let index = 0; index <= 10; index++) {
    if (index == 5){
        console.log('5 detected');
        continue;
    }
    console.log(`value of index is  ${index}`);
    
  }
