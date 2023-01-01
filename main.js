// let str = ["a", "b", "c"]
// let num = [1, 2, 3];
// console.log(str.concat(num));


// let array = [1, 2, 3]
// console.log(array.push(4, 5, 6));


// let array = [1, 2, 3];
// console.log(array.unshift(4, 5, 6));


// let array = [3, 4, 1, 2, 7];
// console.log(array.sort());


// let array = ["a", 3, 4, 1, 2, 7, "b"];
// let forNum = [];
// let forStr = [];

// array.forEach((element) => {
//     if(typeof element === "string") {
//         forStr.push(element)
//     }else {
//         forNum.push(element)
//     }
// })

// console.log(forStr);
// console.log(forNum);





// let arr = [2, 45, 7, 36, 2, 45, 62, 7];
// let newArr = []
// arr.map((elem) => {
//     if (elem%2==0) {
//         newArr.push(elem)
//     }
// })

// console.log(newArr);


// let ar = {
//     num1: 1,
//     num2: 2,
//     num3: 3
// }

// console.log(ar);


let arr = [
    {num1: 1},
    {num2: 2},
    {num3: 3}
];

let obj = {}
arr.forEach((elem) => {
    for(let key in elem) {
        // let item = elem + elem[key] 
        // console.log(item);
        obj += key + ": " + elem[key] + " " ;
    }
})
console.log(obj);