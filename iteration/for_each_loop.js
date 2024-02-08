const info = ["Anshika", "Anjali", "Harsh"]
info.forEach(function (key) {
    console.log(key);
});

//apply on arrow fun
const info1 = ["Anshika", "Anjali", "Harsh"]
info1.forEach((key) => {
    console.log(key);
});


const programming = ["js", "cpp", "java","py"]
programming.forEach( (item , index, arr) => {
    console.log(item , index, arr);
})

const myArr = [
    {
        langName : "Javascript",
        langfilename : "js"
    },
    {
        langName : "Java",
        langfilename : "java"
    },
    {
        langName : "python",
        langfilename : "py"
    }
]

myArr.forEach((item) =>{
    console.log(item.langName);
})

//note : for each does not return any value
const myfamily = ["me", "father","mother","brother","sister"]
const check = myfamily.forEach((item)=> {
   // console.log(item);
    return item
}) 

console.log(check);