// filter ---- return value
//  const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((nums)=> nums > 4)
// console.log(newNums);

// let newNums1 = myNums.filter((nums)=> {
//    return nums > 4})  // note jb scope start kr denge toh return key word likhna hi hota hai
// console.log(newNums1);

// const mynum = []
// myNums.forEach((num)=>{
//     if(num>4){
//         mynum.push(num)
//     }
// })
// console.log(mynum);

const mydata = [
    { book : "history", publish : 1995},
    {  book : "physics" , publish : 1998},
    {  book : "mathematics", publish : 2000},
    {  book : "foodtech", publish : 2001},
    {  book : "history", publish : 1991},
    {  book : "physics" , publish : 1994},
    {  book : "mathematics", publish : 2007},
    {  book : "foodtech", publish : 2009}
];

let userbookData = mydata.filter((bk)=> bk.book === 'history')
userbookData = mydata.filter((bk)=>{return bk.publish > 1991})
console.log(userbookData);






