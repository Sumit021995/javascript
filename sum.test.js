const getSum = require ('./sum');
test('sum of two numbers',()=>{
    num1=10;
    num2=2;
    const result = getSum(num1,num2);
    expect(result).toBe(12);
});

