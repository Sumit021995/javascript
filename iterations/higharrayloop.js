 // for of loop
 // syntex 
 /*
 for (const iterator of object) {
    
 }
 */

 let array = [1,2,3,4,5,6]
 for (const element of array) {
    console.log(element);
 }

 // output of above loop with console print
 /*
1
2
3
4
5
6
 */

let myName = 'Sumit Saurav';
for(let letter of myName){
    console.log(letter);
}
// output
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
*/

let myName1 = 'Sumit Saurav';
for(let letter of myName1){
    if(letter== ' '){
        continue
    }
    console.log(letter);
}

// output
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
*/

let myfirstname = 'Sumit Saurav';
for(let letter of myfirstname){
    if(letter== ' '){
        break;
    }
    console.log(letter);
}

// output
/*
S
u
m
i
t
*/

// Maps is an object that holds key-value pairs & remember the original insertion order of the keys
// Any value (both object and primitive values) may be used as eitehr a key or a value

let map = new Map();
map.set('IN','India');
map.set('USA','United States Of America');
map.set('Fr','France');

console.log(map); 
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States Of America',
  'Fr' => 'France'
}
*/

let newmap = new Map();
newmap.set('name','Sumit')
newmap.set('age','28')
newmap.set('friend','Rohit')
newmap.set('friend','Rohit')
// here one set is repeated at 4th set value 

console.log(newmap); // Map(3) { 'name' => 'Sumit', 'age' => '28', 'friend' => 'Rohit' }

// here 4th value is not added as it is a copy and in map only unique id is stored in object with same arrangement

// for off loop on map

for(let key of newmap){
    console.log(key);
}

// [ 'name', 'Sumit' ]
// [ 'age', '28' ]
// [ 'friend', 'Rohit' ]

for(let [key,value] of newmap){
    console.log(key, ':-',value);
}

// name :- Sumit
// age :- 28
// friend :- Rohit



// for of loop on object

// let myObject = { name : 'sumit', age : 29, place : 'Sitamarhi'}

// for(let [key,value] of myObject){
    // console.log(key,':-', value);
// }

// TypeError: myObject is not iterable