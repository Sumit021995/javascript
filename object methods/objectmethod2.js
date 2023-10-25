const tinder = new Object(); // this is Singleton object
const tinderUser = {}; // This is NON Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false
 console.log(tinderUser); // { id: '123abc', name: 'Rohit', isLoggedIn: false }


 let regularUser = {
    email:'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:'Sumit'
        }
    }
 }
 console.log(regularUser);
 /*

 {
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'Sumit' } }
}

  */
 console.log(regularUser.fullname.userfullname);//{ firstname: 'Sumit' }

 //Combine objects

 let obj1 = {1:'a',2:'b'}
 let obj2 = {3:'a',4:'b'}

let obj3 = { obj1 , obj2 }
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

let obj4 = Object.assign(obj1,obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

let obj5 = Object.assign({},obj1,obj2);
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 

//Combine objects through spread operators

let obj6 = {1:'a',2:'b'}
 let obj7 = {3:'a',4:'b'}

 let obj8 = {...obj6,...obj7};
 console.log(obj8); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

 // syntex used when values come from database

  const users = [

    {
        id:'121',
        email:'s1@gmail.com'
    },
    {
        id:'123',
        email:'s2@gmail.com'
    },
    {
        id:'124',
        email:'s3@gmail.com'
    },
    {
        id:'125',
        email:'s4@gmail.com'
    }
  ]

  let regularUser2 = {
    email:'some@gmail.com',
    fullname: 'Sumit Saurav'
 }
 console.log(regularUser2); // { email: 'some@gmail.com', fullname: 'Sumit Saurav' }
 console.log(Object.keys(regularUser2)); // [ 'email', 'fullname' ] return keys in form of array
 console.log(Object.values(regularUser2)); // [ 'some@gmail.com', 'Sumit Saurav' ] return values in form of array
 console.log(Object.entries(regularUser2)); // [ [ 'email', 'some@gmail.com' ], [ 'fullname', 'Sumit Saurav' ] ] 
 // above command returns array of keys and values as elements of an array as shown above

 console.log(regularUser2.hasOwnProperty('email')); // true  // to check the property is available 
  