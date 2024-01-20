//syntax:
// let arr = [1,2,3]
// // let result = arr.reduce((acc,currval)=>{
// //     console.log(`accumulator : ${acc} & currValue : ${currval}`);
// //     return acc + currval
// // },0)
// // console.log(result);

// //arrow fun
// let result1 = arr.reduce((acc,currval) => acc+currval,0)
// console.log(result1);

let arr1 = [
    {itemName : "javascript", price : 999},
    {itemName : "python", price : 499},
    {itemName : "datascience", price : 1999},
    {itemName : "webdev", price : 999},
]

let result2 = arr1.reduce((acc,item) => acc + item.price, 0)
console.log(result2);