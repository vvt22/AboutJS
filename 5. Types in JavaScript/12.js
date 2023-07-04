// Adding elements in 2d Array == Multidimensional Array

let arr = [["Jack", 23], ["Sarah", 24]]
arr.push(["Ram", 21])
console.log(arr);   // [ [ 'Jack', 23 ], [ 'Sarah', 24 ], [ 'Ram', 21 ] ]


let arr2 = [["Jack", 23], ["Sarah", 24]]
arr2[1][2] = "Ram";
console.log(arr2); // [ [ 'Jack', 23 ], [ 'Sarah', 24, 'Ram' ] ]


let arr3 = [['Jack', 23], ['Sarah', 24, 'Ram']]
arr3.pop()
console.log(arr3); // [ [ 'Jack', 23 ] ]


let arr4 = [['Jack', 23], ['Sarah', 24, 'Ram']]
arr4[1].pop()
console.log(arr4);




