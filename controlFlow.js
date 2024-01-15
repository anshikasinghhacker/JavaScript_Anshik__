//control flow/Logic flow in js

//1. if
// if(condition){

// }

// if(true){    

// }

// if(false){ //this will never execute

// }

//comparision operator
//<, >, <=, >=, ==, !=

// === strict check this operator check type as well (for type checking)
if(2==="2"){  // false
    console.log(true);
}
else{
    console.log(false);
}
 // diff b/w - == , === -> one is strict cherck and one not strict check not 

 if(2=="2"){    // true
    console.log("true");
}else{
    console.log("false");
}

if(2!=5){
    console.log("true");
}
else{
    console.log("false");
}

let temp = 4
if(temp<5){
    console.log("cold");
}
console.log("normal");  //put it on else condition
let today_temp = 4
if(today_temp<5){
    console.log("cold");
}else{
console.log("normal");
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); //power is not defined error comes bcoz of scope the variable not accessible outside the scope

//if we use var variable
// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

const balance = 1000
 if(balance>500) console.log("true"), console.log("false"); // dont do like that avoid using , comma

//nested condition
if(balance<900){
    console.log("ok");
}
else if(balance<700){
    console.log("ok ok");
}
else if(balance<500){
    console.log("not ok");
}else{
    console.log("fine");
}
