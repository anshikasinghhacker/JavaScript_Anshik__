//function definition
function saymyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("A");
}
//saymyName() //fun reference

function addTwoNum(number1, number2){
    console.log(number1 + number2);
}

//addTwoNum(8,2)
let result = addTwoNum(8,2)

//console.log("Result: ",result); //undefined output bcoz fun not return anything


function addTwoNum(number1, number2){
    return number1 + number2
    console.log("Anshika"); // turn k baad kuch print ni hota h not printed bcoz re
}

addTwoNum(8,2)
let result1 = addTwoNum(8,2)
//console.log("Result: ",result1);

function isLoggedinUserMessage(username)
{
if(username===undefined){
    console.log("Please enter username");
    return
}

   return `${username} is logged in`
}
//console.log(isLoggedinUserMessage("Anshika"));
// console.log(isLoggedinUserMessage());//undefined output ayga bcoz we did not pass any value here

function calculateCartPrice(num1){
    return(num1)
}
//console.log(calculateCartPrice(200));
//but what if we pass several value
//console.log(calculateCartPrice(200,400)); //output - 200
//to get all value we can use rest operator which is same as spread

function calculateCartPrice1(...num){
    return num
}
//console.log(calculateCartPrice1(200,400,600));

function calculateCartPrice2(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice2(200,400,600,700)); //output 600,700 bcoz 200,400 goes uder val1 and val2

const user = {
    name : "Anshika Singh",
    age : 22
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name}, user age is ${anyObject.age}`) 
}

handleObject(user)

// handleObject({
//     name : "Anshika",
//     age : 22
// })

let myarr = [200,600,1000]
function returnVal(getArray){
    return getArray[2]
}
console.log(returnVal(myarr));
