// 1. for loop
for (let index = 0; index <=10; index++) {
    const element = index;
    console.log(element);
    
}

for (let index = 0; index <=10; index++) {
    const element = index;
    if(index==5){
        console.log("5 is best number");
    }
    console.log(element);
    
}

//nested loop
for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);
   for (let j = 0; j <= 10; j++) {
    console.log(`inner loop ${j}, outer loop ${i}`);
   }
    
}

for (let i = 0; i <=10; i++) {
    console.log(`Table of: ${i}`);
   for (let j = 0; j <= 10; j++) {
    console.log(i+ " * "+j+" = " +i*j);
   }
    
}

//now implement loop on array
const myArr = ["Anshika", "Muskan"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

for (let index = 0; index <= myArr.length; index++) { // output => myArr is not defined
    const element = myArr[index];
    console.log(element);
    
}

// break keyword
for (let i = 1; i <= 10; i++) {
    const element = i;
    if(i == 5){
        console.log("5 is detected");
        break;
    }
    console.log(element);
    
}

//continue keyword
for (let i = 1; i <= 10; i++) {
    const element = i;
    if(i == 5){
        console.log("5 is detected");
        continue;
    }
    console.log(element);
    
}


