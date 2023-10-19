const tinder = new Object(); // this is Singleton object
const tinderUser = {}; // This is NON Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false
 console.log(tinderUser); // { id: '123abc', name: 'Rohit', isLoggedIn: false }
