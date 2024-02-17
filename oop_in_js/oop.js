const user1 = {
    username : "Anshika",
    loginCount : 10,
    signedIn : true,

    getUserDetail: function(){
       // console.log("Got user details from database");
    // current context
    //console.log(`Username ${this.username}`);
   // console.log(this);
    }
}

// console.log(user.username);
 //console.log(user.getUserDetail());
 //console.log(this);

//  const promiseOne = new Promise()
//  const data = new Date()

//  new keyword is constructor function
// constructor function give new instance always

function User(username,loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}
const userOne = new User("Anshika",12,true)
const userTwo = new User("ChaiAurCode",11,false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

// working mechanism:
// step 1 : obj created - when we use new keyword a new object created called instance
// step 2: constructor finction call due to new keyword
// step 3: due to this keyword argument and all inject