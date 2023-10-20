function wordFirstCapital(str){
    let wordStr = str.trim();
    let splitStr = wordStr.split(" ");
    let AllSplitWords = splitStr.map((words)=> words[0].toUpperCase() + words.slice(1))
    console.log(AllSplitWords);
    return AllSplitWords.join(' ');
}
console.log(wordFirstCapital('Sumit Saurav is my name and vivek is my friend'));

function consonentsInString(string1){
    let string1=string1.toLowerCase();
    let consonent ='bcdfghjklmnpqrstvwxyz';
    let count=0;
    for(let i=0;i<string1.length;i++){
        
    }

}
console.log(consonentsInString('Sumit Saurav is my name and vivek is my friend'));