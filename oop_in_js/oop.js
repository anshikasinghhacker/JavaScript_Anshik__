const user = {
    username : "Anshika",
    loginCount : 10,
    signedIn : true,

    getUserDetail: function(){
        console.log("Got user details from database");
    }
}

console.log(user.username);
console.log(user.getUserDetail());