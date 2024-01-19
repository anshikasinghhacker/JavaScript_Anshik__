//array specific loop
//for of loop 

//for (const iterator of object) { //syntax
    
//}

const arr = [10,20,30,40,50]
for (const num of arr) {
 //   console.log(num);
}

const greet = "Hello Anshika Singh!"
for (const greeting of greet) {
   // console.log(greet);
   //console.log(`each char is ${greeting}`);
}

//Maps - known for unique values 
// it store key value pair in same order
const map = new Map()
map.set('IN', 'India')
map.set('UK', 'Unitedkingdom')
map.set('GR','German')
//console.log(map);

//now we implement for of loop over map
for (const val_map of map) {
   // console.log(val_map); // this will give us seprate array of each data we enter
//     [ 'IN', 'India' ]
// [ 'UK', 'Unitedkingdom' ]
// [ 'GR', 'German' ] like this
}
for (const [key,value] of map) {
    console.log(key, ':-', value);
}

//Note object is not iteratable by for of loop

const myObj = {
    'Name' : 'Anshika',
    'Dept' : 'CSE',
    'Degree' : 'Bachelor'
}
for (const [key,value] of myObj){
    console.log(key,':-',value);
    //output :- TypeError: myObj is not iterable
}




