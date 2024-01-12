//this keyword : talk about current context
// const user = {
//     username : "Anshika Singh",
//     website : "github.com",

//     welcomeMessage : function(){
//        // console.log(`${this.username},welcome to website`);
//      // console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Muskan Singh" //now current context is muskan singh
// user.welcomeMessage()
//console.log(this); // output : {} , this ki value globle scope mei empty ati h

//phle js ko execute only brower ka engine krta tha but now we have standalone engine like node js
//brower k andr jb v wo engine run krta hai toh sbse jyda jo global obj jo h wo windows obj h

// function chai(){
//    let username = "Chauhan"
//     console.log(this.username);// output - undefined 
//     //remember : we cant use this keyword like this.username within function 
//     //but in obj we can use this keyword to refer current context
// }
// chai()

// Now how to declare function like arrow fun

// let myfun = function () {
//     let user1 = "Muskan Singh"
//     console.log(this.user1); // output : undefined
// }

// myfun()

//arrow function
// let myfun1 =  () => {
//     let user1 = "Muskan Singh"
//     console.log(this.user1); // output : undefined
//     console.log(this) // {}
// }

// myfun1()

//syntax arrow fun
//() => {}

// const sum = (num1 , num2) =>{
//     return num1 + num2
// }

// console.log(sum(5,5));

//arrow fun use like -- implicit return
const multiply = (num1,num2) => num1+num2
console.log(multiply(2,2));
const multiply1 = (x,y) => (x*y)
console.log(multiply1(2,2));

//1 more way
// let myname = (name) => ({username:"Anshika"})
// console.log(myname());


// note curly bracket mei rap kre toh return keyword likhna hoyga
// note round bracket mei rap kre toh ret keyword ni likhna hoga

