function calculator(a,b,op){
    if (op === "+"){
        return a+b;
    }else if (op === "-"){
        return a-b;
    }else if (op === "*"){
        return a*b;
    }else if (op === "/"){
        return a/b;
    }else {
        return "invalid operator try again"
    } 
}

function calculator2(x,y,op2){
    let result;
    switch (op2){
        case '+':
        result=x+y;
        break;
        case '-':
        result=x-y;
        break;
        case '*':
        result=x*y;
        break;
        case '/':
        result=x/y;
        break;
        default:
            throw new Error("invalid operator");


    }
    return result;
}
module.exports = calculator2;
module.exports = calculator;

