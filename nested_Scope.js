function one(){
    const username = "Anshika Singh"

    function two(){
        const website = "spotify"
        console.log(username);
        //note : child fun access parent variable 
    }
  //  console.log(website);// output: website is not defined bcoz it is out of scope
    two() 
}
one()

if (true){
    const username = "Anshika"
    if(username === "Anshika"){
        const site = " anshika.com"
        console.log(username + site);
    }
   console.log(site);//output: site is not defined
}
console.log(username);//not accessible

// function addone(num){
//   return num + 1                 
// }
// addone(5) 
//                          //by both way function can define
// let addtwo = function(num) {
//     return num + 1
// }
// addtwo(5)

//---------------------------mini hoisting in javascript----------------------------------
console.log(addone(5));
function addone(num){
    return num + 1                 
  }
//by both way function can def
                             
addtwo(5) // output: ReferenceError: Cannot access 'addtwo' before initialization
let addtwo = function(num) {
      return num + 1
  }
  