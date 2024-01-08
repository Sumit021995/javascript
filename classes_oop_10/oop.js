// object literal

const user = {
    username: "Sumit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}