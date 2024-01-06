// const fbUser = new Object()
// console.log(fbUser);
const fbuser = {} //non-singleton object
//console.log(fbuser); //note - both give same output {}
fbuser.name = "Anshika"
fbuser.age = 22
fbuser.department = "CSE"
// // console.log(fbuser);


// //obj nesting below
const spotifyUser = {
    name : "Anshika",
    userInfo: {
    fullName : "Anshika Singh",
    email : "ansh@yahoo.com",
    moreInfo :{
        department: "Fashiontech",
        isLoggedIn: true
    }
    }
}
// //now we access above obj 
console.log(spotifyUser);
console.log(spotifyUser.userInfo);
console.log(spotifyUser.userInfo.moreInfo);
console.log(spotifyUser.userInfo.moreInfo.isLoggedIn);

const obj1 = {1:"Anshika",2:"Muskan"}
const obj2 = {3: "Harsh", 4:"Bipul"}
const obj3 = {5:"Anjali", 6:"Juhi"}
const obj4= {obj1,obj2,obj3}
console.log(obj4);
// //output: 
// {
//   obj1: { '1': 'Anshika', '2': 'Muskan' },
//   obj2: { '1': 'Harsh', '2': 'Bipul' },
//   obj3: { '1': 'Anjali', '2': 'Juhi' }
// }

// // same problem like array obj k inside obj aya -- to overcome this problem we use Object.assign(target , source) where target is{} & source is obj1,obj2,obj3
const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5);

// //in array we study about spread which return a single array at which all the array present which we want to merge
// //here we also use spread in obj
const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6);


// //we can take obj within an array 
const user = [
    {
        name1 : "Anshik",
        age : 22
    },
    { 
        name2 : "Muskaan",
        age : 21
    },
    {
        name3 : "Minnie",
        age : 20
    }
]
//console.log(user[1].name1);

const lang = {
    proglang : "java",
    devlang : "javascript",
    datascilang : "python"
}

console.log(Object.keys(lang)); //note: the datatype of result here is array its means we take keys and put it into an array that can use for several means later
console.log(Object.values(lang));
console.log(Object.entries(lang));

// //hasOwnProperty method -- by using this method we can check an object has specific property available or not
console.log(lang.hasOwnProperty('devlang'));
console.log(lang.hasOwnProperty('algorithm'));

/*----------------------------Object destructure--------------------------------------- */
const student = {
    studentName : "Anshika Singh",
    uid : 8162
}

console.log(student.studentName);

//obj de-structure
const {studentName} = student //now we directly access property studentName
console.log(studentName); //Anshika Singh output

// -------JSON-----------
// {
//     "name" : "Anshika",
//     "subject" : "js"
//     "uid" : "8162"
// }
