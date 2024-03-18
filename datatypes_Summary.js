// There are two type of datatype
//1.Primitive DataType
//2.Non Primitive or reference type


// //1.Primitive DataType -- 7
// // String, Boolean, Number, null, undefined, symbol, bigInt
const score = 100
const scoreVal = 100.9 //both come in Number category
console.log(typeof scoreVal);

// const isLoggedIn = false
// console.log(typeof isLoggedIn);
// const outsidetemp = null // yaha null mtlb temp empty h
// console.log(typeof outsidetemp);
// let userEmail //undefine
// console.log(typeof userEmail);

//symbol -- use for uniqueness
// let mynum1 = Symbol("122")
// let mynum2 = Symbol("122")
// console.log(typeof mynum2);

// console.log(mynum1 === mynum2); // this will return false 

// //bigInt
// const bigNumber = 23455667987664n
// console.log(typeof bigNumber);


//2.Non Primitive Datatype or reference type
// Array, Objects, Functions

//Array
let myArray = ["Anshika", "Shubham",]
console.log(myArray);
console.log(typeof myArray);

// //Object
let myObj = {
    firstName : "Anshika",
    lastName : "Singh",
    department : "CSE",
    age : 22,
    pass : true
}
console.log(typeof myObj);
// console.log(myObj);

// //Function
let myFunction = function(){
    console.log("Hello Anshika");
}
console.log(typeof myFunction);

// note: the returntypeof non primitive datatype is object 
// the returntypeof function is object function

//stack & heap memory in javascript
//stack -- primitive datatype
//heap -- nonprimitive datatype