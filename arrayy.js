//Javascript array are resizable
//Js array are 0 indexed
//js array create shallow copies--copies whose property share same reference point
//note -- a deep copy of an obj is a copy whose property not share same ref point

//we can declare array in different ways:
const myArr = [1,2,3,4,"Anshika",true]
console.log(myArr);

const myArr1 = [1,2,3,4,5]
console.log(myArr1);

const myArr2 = new Array(10,20,30,40,50)
console.log(myArr2);

console.log(myArr.length);
console.log(myArr[0]);
console.log(myArr[4]);

//Array Methods 
//1.push()
let myArr5 = [1,2,3,4,"Anshika"]
// console.log(myArr5.push(10));
// console.log(myArr5);

// //2.pop() -- it removes the lst value of given array
console.log(myArr5.pop());
console.log(myArr5);

//shift or unshift -- similar as push pop bt here the operation perform at index 0 (starting point)
//1.unshift -- add value at front
let myArr3 = [1,2,3,4,5]
console.log(myArr3.unshift(100));
console.log(myArr3);

//2.unshift -- remove the value from the front
console.log(myArr3.shift());
console.log(myArr3);

console.log(myArr3.indexOf(9));
console.log(myArr3.includes(9));

//join method -- covert the array into string
let myArr4 = myArr3.join()
console.log(myArr3);
console.log(myArr4);
console.log(typeof myArr3);
console.log(typeof myArr4);

//Slice & Splice
let myarrr = [1,2,3,4,5]
//1. slice -- (0,3) the last range 3 not include when we apply slice bt at the end after applying slice the original arr not affected if we again print the original arr it inclue all the value
console.log("A ",myarrr);
let arr1 = myarrr.slice(0,3) 
console.log(arr1);
console.log("B ",myarrr);

//2.Splice -- (1,3) the last range 3 include when we apply splice bt at the end after applying splice the original arr affected if we again print the original arr it exclude the all the value which we given in the range
let myar = [0,1,2,3,4,5]
console.log("A ",myar);
let arr2 = myar.splice(1,3)
console.log(arr2);
console.log("B ", myar);

//note: the major diff b/w splice & splice is at the end when we print the original arr again then,
//in case of slice -- the arr will print as it is without removing the value which we pass in range
//in case of splice -- the arr which we get after perfoming splice operation the original arr excluded the value which we pass in range of splice method
//one more diff 
// let arr9 = myar.splice(0,4)  //doubt
// console.log(arr9);

const marvel_hero = ["Thor", "IronMan","SpiderMan"]
const bollywood_hero = ["Sid","Sahid","Sarukh"]
marvel_hero.push(bollywood_hero) // array k andr array aajyga [ 'Thor', 'IronMan', 'SpiderMan', [ 'Sid', 'Sahid', 'Sarukh' ] ] -- yaha sid wala array ko element 4 treat kiya jyga
console.log(marvel_hero);
console.log(marvel_hero[3][2]); //element third ka dusra element 

//concat
const conc_arr = marvel_hero.concat(bollywood_hero)
console.log(conc_arr); //concat return new arr in in all the element exist in sigle array

// //spread-- mainly we can use spread bcoz here we add more than two value bt when we use concat we only concat 2 value not more than that
console.log(...marvel_hero,...bollywood_hero);

let another_arr = [1,2,3, [4,5,6],7,[8,9,[10,20,30]]]
const solve_arr = another_arr.flat(Infinity)
console.log(solve_arr);

console.log(Array.isArray("Anshika")); //ky Anshika array hai Array.isArray return false bcoz anshika is string
//now we convert Anshika whish ia string into array
console.log(Array.from("Anshika")); //--- array mei convert kr dega
console.log(Array.from({name : "Anshika"})); //-- []empty return krega coz ye isko array mei convert ni kr paya

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


