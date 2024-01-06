let score = "Anshika"
console.log(typeof score)
console.log(typeof (score))
let valueInNum = Number(score)
console.log(valueInNum) // nan
console.log(typeof valueInNum)  //number

let  box = null;
console.log(box)
console.log(typeof (box))
let change = Number(null)
console.log(change)
console.log(typeof change)

let mynum = undefined
console.log(typeof mynum)
let mynum1 = Number(mynum)
console.log(mynum1)
console.log(typeof mynum1)

let numbool = true
console.log(typeof numbool)
let changenumbool = Number(numbool)
console.log(typeof changenumbool)
console.log(changenumbool)

// let numbool = false
// console.log(typeof numbool)
// let changenumbool = Number(numbool)
// console.log(typeof changenumbool)
// console.log(changenumbool)

// "33" => 33
//true => 1
// false => 0
//"33abc" => NaN

let isLoggedIn = 1
let value = Boolean(isLoggedIn)
console.log(value)

// let isLoggedIn = 0
// let value = Boolean(isLoggedIn)
// console.log(value)

// let isLoggedIn = "" //empty--------false
// let value = Boolean(isLoggedIn)
// console.log(value)

// let isLoggedIn = "Anshika" //empty--------false
// let value = Boolean(isLoggedIn)
// console.log(value)


// 1 => true
// 0 => false
// "" => false
// "Anshika" => true

let somenum = 33
console.log(typeof somenum)
let stringnum = String(somenum)
console.log(stringnum)
console.log(typeof stringnum) 
