// IMMEDIATELY INVOKED function expression (IIFE)

(function myInfo(){   //named iife/
    console.log("My name is Anshika Singh");
})(); //ye code end hone k liye end mei semicolon lgana h taki next code execute ho ske

//myInfo() -- no need to write this
//()() -- 1st parenthesis for fun def & second parenthesis for fun call execution
// for removing pollution of global scope we use iife

//we can write iife fun as arrow fun 

(() => {
    console.log("My name is Anshika Singh")
})();

((myname) => {
    console.log(`My name is ${myname}`);
})('Muskan')