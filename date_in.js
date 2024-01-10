//The date we declare is calculated from January 1 1970
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let createdDate = new Date(2024, 0 , 4)
console.log(createdDate.toDateString());

let createdDate1 = new Date(2024, 0 , 4, 2, 30)
console.log(createdDate1.toLocaleString());

let createdDate2 = new Date("2024-01-4") //yy/mm/dd
console.log(createdDate2.toLocaleString());

 let mycreatedDate = new Date("01-14-2024") //mm/dd/yy
console.log(mycreatedDate.toLocaleString());

//TIMESTAMP
let mytimestamp = Date.now()
console.log(mytimestamp);// give millisec value
console.log(mycreatedDate.getTime());

//if we want to convert current time into second then we divide by 1000
console.log(Math.floor(Date.now()/1000));

let myDatee = new Date()
console.log(myDatee.getMonth());
console.log(myDatee.getDay());
console.log(myDatee.getFullYear());

//in toLocalString we define obj by this ways we can facilitate the tolocaltring function
let myDateis = new Date()
console.log(myDateis.toLocaleString('default', {
     weekday : "long",
     
}));
