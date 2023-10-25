function findMaxNumber(arr) {

    let maxNumber=arr[0];

    for (let i=0;i<arr.length;i++) {
        if(maxNumber<arr[i]){
            maxNumber=arr[i];
        }

    }
    return maxNumber;
}

console.log(findMaxNumber([10,20,30]));