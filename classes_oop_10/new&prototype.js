const multiplyBy5 = (num)=>{
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(3)); // 15
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype);

function createItemPrice(item,score){
    this.item = item
    this.score = score
}