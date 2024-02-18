// let myName = "Anshika   "
// // console.log(myName.length);
// console.log(myName.truelength);

let myHeros = ["thor", "spider"]

let heroPower ={
    thor : "hammer",
    spider : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spider}`);
    }
}

Object.prototype.anshika = function(){
    console.log(`anshika is present in all objects`);
}

Array.prototype.heyAnshika = function(){
    console.log(`Anshika says hello`);
}

//heroPower.anshika()
// myHeros.anshika()

// heroPower.heyAnshika()
//  myHeros.heyAnshika()

//  ---inheritance---

const User = {
    name: "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assihnment',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode    "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.truelength()

"anshika".truelength()
"iceTea".truelength()