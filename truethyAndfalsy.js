//truthy and falsy
const userEmail = "anshi@salesforce" //if we have string then it means truthy value v
if(userEmail){
    console.log("got useremail");
}
else{
    console.log("did'nt get useremail");
}

const userEmail1 = ""  //if we have empty string then it means falsy value 
if(userEmail1){
    console.log("got useremail");
}
else{
    console.log("did'nt get useremail");
}

const userEmail2 = []  //if we have an then it means truthy value 
if(userEmail2){
    console.log("got useremail");
}
else{
    console.log("did'nt get useremail");
}

//note:
//falsy value: -> 0 , -0, BigInt, 0n, "", null, undefined, NaN
// truthy value: -> "0" --> truthy bcoz written as string
                   // 'false' --> truthy bcoz written as string
                   // " "
                   // { }
                   //functon() {}

// const userEmail2 = []  //if we have an then it means truthy value 
//  if(userEmail2){
//  console.log("got useremail");
//  }
//  else{
//    console.log("did'nt get useremail");
//  }

//  if(userEmail2.length===0){
//     console.log("Array is empty");
//  }

 //if obj is empty then how we check
 const emptyObj = {}
 if(Object.keys(emptyObj).length===0){
    console.log("Obj is empty");
 }


 //false == 0 --> true
 //false == '' --> true
// 0 == '' -->true

// Nullish Coalescing Operator (??) --> here every this based on null & undefined
let val;
val = 5 ?? 10
console.log(val);

let val1;
val1 = null ?? 10
console.log(val1);

let val2;
val2 = undefined ?? 10
console.log(val2);

let val3 
val3 = null ?? 10 ?? 50
console.log(val3);

//Note : Nullish Coalescing Operator (??) & Ternary Operator are two different thing

//Ternary Operator:
// condition ? true : false
const chocolateShake = 100
chocolateShake > 80 ? console.log("true") : console.log("false");
