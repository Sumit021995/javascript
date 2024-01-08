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

