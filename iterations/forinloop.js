let obj = {username : 'Sumit Saurav', isLoggedIn : false, age : 28}

for(let key of Object.keys(obj)){
    console.log(key);

}

// username
// isLoggedIn
// age

// for in loop on objects
// syntex 
/* 
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

// for in loop

let obj1 = {username : 'Sumit Saurav', isLoggedIn : false, age : 28}

for (let key in obj1){
    console.log(key);

}

// username
// isLoggedIn
// age

for (let key in obj1){
    console.log(obj[key]);

}


// Sumit Saurav
// false
// 28

// for in loop for array

let myArray = [2,5,6,8,10]
for (let key in myArray){
    console.log(key);
}

// result shows the index of an array
// 0
// 1
// 2
// 3
// 4


for (let key in myArray){
    console.log(myArray[key]);
}

// result shows the elements of an array 
// 2
// 5
// 6
// 8
// 10

// for in loop for string

let myString = 'Sumit Saurav is my name';

for (let letter in myString){
console.log(letter);
}

// result shows the index of the string that is 
/*
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
*/


for (let letter in myString){
console.log(myString[letter]);
}

// result shows the index of the string that is 
/*
S
u
m
i
t

S
a
u
r
a
v

i
s

m
y

n
a
m
e
*/

let map = new Map();
map.set('IN','India');
map.set('USA','United States Of America');
map.set('Fr','France');

console.log(map);

// for in loop on map

for (let key in map){
    console.log(key);
}

// here nothing is printed as Map is not iteratable
