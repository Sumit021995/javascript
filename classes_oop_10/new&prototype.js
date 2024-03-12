const multiplyBy5 = (num)=>{
    return num*5
}

multiplyBy5.power = 2
// const new = multiplyBy5.prototype


console.log(multiplyBy5(3)); // 15
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.Prototype); // undefined , {}
// console.log(new); // undefined , {}

function createItemPrice(item,score){
    this.item = item
    this.score = score
}

createItemPrice.prototype.increment = function(){
    this.score++
}

const chai = new createItemPrice("chai", 25)
const tea = new createItemPrice("tea", 100)

chai.increment();
console.log(tea);
console.log(chai);