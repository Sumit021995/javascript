const multiplyBy5 = (num)=>{
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);

function createItemPrice(item,score){
    this.item = item
    this.score = score
}