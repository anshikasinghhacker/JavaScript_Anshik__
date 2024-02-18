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
 myHeros.heyAnshika()