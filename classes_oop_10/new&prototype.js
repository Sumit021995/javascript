const multiplyBy5 = (num)=>{
    return num*5
}

multiplyBy5.power = 2
// const new = multiplyBy5.prototype


console.log(multiplyBy5(3)); // 15
console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.Prototype); // undefined , {}
// console.log(new); // undefined , {}

function createItemPrice(item,score){
    this.item = item
    this.score = score
}

createItemPrice.prototype.increment = function(){
    this.score++
}
createItemPrice.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createItemPrice("chai", 25)
const tea = new createItemPrice("tea", 100)

chai.increment();
chai.printMe(); // price is 26
// console.log(chai.increment()); // undefined
console.log(tea); // createItemPrice { item: 'tea', score: 100 }
console.log(chai); // createItemPrice { item: 'chai', score: 26 }