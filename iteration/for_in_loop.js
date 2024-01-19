//we can use this loop for iteration of object


const obj = {
    'MyInfo' : 'Anshika',
    'contact' : '9939293880',
    'address' : 'Punjab'
}
for (const key in obj) {
   // console.log(key);  //key
   // console.log(obj[key]); //value
 //  console.log(`${key} is ${obj[key]}`); //key value both
}

//for in over array
const arr = ["1","2","3","4","5"]
for (const key in arr) {
 // console.log(key);  //index
  //to get value:
//  console.log(arr[key]); //val
}

//for in over map -- not itetrable
const map = new Map()
map.set('AS','Anshika Singh')
map.set('MS', 'Muskan Suryewanshi')

for (const key in map) {
  console.log(key);
}

