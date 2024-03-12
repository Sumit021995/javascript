// object literal

const user = {
    username: "Sumit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database"); // Got user details from database
        console.log(`Username: ${this.username}`); // Username: Sumit
        console.log(this);/* {
            username: 'Sumit',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
          }
          undefined */
    }

}

console.log(user.username); // Sumit
console.log(user.getUserDetails()); 

// "this" keyword is used for this current context

function User(username,loginCount,isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;
    return this;
}

const newUserOne = new User("sumit",5,true)
const newUserTwo = new User("amit",2,false)

console.log(newUserOne);
console.log(newUserTwo);
