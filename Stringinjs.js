const name = "Anshika"
const lastName = " Singh"
//console.log(name+lastName+" "+"Rajpoot"); //this is the outdated syntax
//nowdays we use back ticks ` ` modern way
console.log(`Hello my name is ${name}`);//thats called string interpolation

//one more way to declare variable
const mydepartment = new String("Computer Science")
console.log(mydepartment[0]);
console.log(mydepartment.__proto__);
console.log(mydepartment.length);
console.log(mydepartment.toUpperCase());
console.log(mydepartment.charAt(1));
console.log(mydepartment.indexOf('o'));

const newString = "Muskan"

// console.log(newString.substring(0,3));
console.log(newString.slice(0, -2));
console.log(newString.slice(-3, 0));

//trim
const newStringOne = "    Anshika   "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://ansh@1234.com/anshika20%singh"
console.log(url.replace("20%" ,"-"));

// //include
console.log(url.includes('ansh'));
console.log(url.includes('vansh'));

//split
const myname = "Anshika Singh Rajput"
console.log(myname.split(' '));
console.log(myname[3]);
