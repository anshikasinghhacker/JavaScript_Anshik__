//singleton -- when we create an obj through a constructor --Object.create
// when we declare like literal then singleton not made

//obj literal
//obj declaration :

const mysymb = Symbol("key1") //symbol ko obj mei use krne k liye we have first define symbol then use it as key vvalue within an object
let jsUser = {
     name : "Anshika",
     "full name" :"Anshika Singh", // this full name only access by this method which is -- jsUser["full name"]
     age : 22,
     //mysymb  : "key1",//mysymb is not treated as symbol here
     [mysymb] : "key1", //not it act as symbol
     email : "anshik@yahoo.com",
     location : "Punjab",
     isLoggedIn : false,
     lastloginDay : ["Monday","Saturday"]

}

//how to access obj
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
//console.log(jsUser."full name"); -- while accessing this way we get error there is no chance to access so that we use this way to access--jsUser["full name"]

// console.log(jsUser.mysymb);
// console.log(typeof jsUser.mysymb); //type -string it not consider as symbol

// console.log(jsUser[mysymb]); //it is consider as symbol
// console.log(typeof jsUser[mysymb]);//doubt

//value_change
// jsUser.email = "anshika@google.com"
// console.log(jsUser.email);

// //freeze -- if we dont wnt 2 chg value
// Object.freeze(jsUser)
// jsUser.email = "anshik@gpt.com"
// console.log(jsUser);

//function in obj
jsUser.greeting = function(){
console.log("Hello jsUser");
}
//console.log(jsUser.greeting());
console.log(jsUser.greeting);

jsUser.greeting1 = function(){
    console.log(`Hello jsUser, ${this.name}`);//here we use this keyword to refere obj key
}

console.log(jsUser.greeting1());
//note:- obj element can access using . maily bt sometime we access using [] sqr bracket (in symbol case)



