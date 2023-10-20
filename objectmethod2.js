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

 let obj1 = {1:'a',2:'b'}
 let obj2 = {3:'a',4:'b'}

let obj3 = { obj1 , obj2 }
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

let obj4 = Object.assign(obj1,obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

let obj5 = Object.assign({},obj1,obj2);
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 //Combine objects