let nums = [1,2,3,4,5,6,7]
let k = 3

let nums1 = [-1,-100,3,99]
let k1 = 2

// var rotate = function(nums, k) {
//     let result = [];
//     for(let i=0; i < k; i++){
//        let x = nums.pop()
//        console.log(x);
//        result.unshift(x);
       

//     }  
//     for (let j = 0; j < nums.length; j++) {
//         result.push(nums[j]);
        
        
//     }
//     return result;
    
// };

// let rotate = function(nums, k) {
// for(let i = 0; i< k; i++){
//     nums.unshift(nums.pop())
// }
// return nums;
// };

// console.log(rotate(nums,k));
 let n = nums1.length

// console.log(nums.slice(n-k));
// console.log(nums.slice(0,k+1).reverse());
// let Newnums=nums.
// let Y = nums.slice(0,k+1).reverse()
let X=nums1.splice(0,n-k1)
console.log(X)
// console.log(nums);
for (let i = 0; i < k1; i++) {
    nums1.push(X[i])
    console.log(nums1);
    
}


    // for (let i = 0; i < k; i++) {
    //    Newnums.push(nums[i])
    //    nums = Newnums  
    // }
    // console.log(nums);


// console.log(arrayNew());

var rotate = function(nums, k) {
    k=k%nums.length;
    let X=nums.splice(-k);
    nums.unshift(...X)
     
 
 };

 




