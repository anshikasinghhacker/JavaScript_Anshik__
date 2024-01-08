//nums
const score = 400
const score1 = new Number(100)
console.log(score);
console.log(score1);

console.log(score1.toString());
console.log(score1.toString().length);
console.log(typeof score1);

//for give precise value we use -- to fix
console.log(score1.toFixed(2));
console.log(score1.toFixed(1));

//toprecision

const mynum = 98.81
console.log(mynum.toPrecision(2));
const mynum1 = 98.815
console.log(mynum.toPrecision(3));
const mynum2 = 6789.99
console.log(mynum2.toPrecision(4));


//tolocalstring
const number = 10000000
//console.log(number.toLocaleString());
console.log(number.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++      MATHS    +++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(89.90));
console.log(Math.round(81.1));
console.log(Math.floor(88.9));
console.log(Math.ceil(88.1));

console.log(Math.max(90,89,56,99));
console.log(Math.min(90,89,56,99));

Maths.random *important
console.log(Math.random());
//Maths.random value comes b/w 0 & 1
console.log(Math.random()* 10); //to avoid 0 we add 1
console.log((Math.random()*10)+1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))); // bt we need min value 10 so, + min at the end
console.log(Math.floor(Math.random()*(max-min + 1))+min);