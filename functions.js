function wordFirstCapital(str){
    let wordStr = str.trim();
    let splitStr = wordStr.split(" ");
    let AllSplitWords = splitStr.map((words)=> words[0].toUpperCase() + words.slice(1))
    console.log(AllSplitWords);
    return AllSplitWords.join(' ');
}
console.log(wordFirstCapital('Sumit Saurav is my name and vivek is my friend'));

function consonentsInString(string1){
    string1=string1.toLowerCase();
    let consonent ='bcdfghjklmnpqrstvwxyz';
    let count=0;
    for(let i=0;i<string1.length;i++){
         let char = string1.charAt(i);
         if(consonent.includes(char)){
            count++;
         }

    }
    return count;

}
console.log(('Sumit Saurav is my name and vivek is my friend').length)
console.log('Consonent:-',consonentsInString('Sumit Saurav is my name and vivek is my friend'));

function findMissingCoin(coins){
    // sum of all coins from 1 to N
let totalCoins = (coins.length+1)*(coins.length+2)/2;
// sum of all coins in collection 
let sumOfAllCoins = coins.reduce((accumulator,current)=> accumulator+current,0);
let missingCoin = totalCoins-sumOfAllCoins;
return missingCoin;

}
console.log(findMissingCoin([1,2,4,6]));

function reverseSentence(str){
    return str.split(' ').reverse().join(' ');
}
console.log(reverseSentence('Sumit Saurav is my name and vivek is my friend'));