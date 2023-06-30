// Value Types Data Types are Primitive Data Types ==> Immutable
// String , Symbol , Boolean , BigInt , null , Number , undefined
// Stores Data in Stack in Last in First Out Order LIFO
// Its has less space than compared to other data structres
let ram = 1234;
console.log(ram); // 1234

let shyam = ram;
console.log(shyam); // 1234

ram = 4567;

console.log(shyam); // 1234

// Reference Types Data Types are Non Primitive Data Types ==> Mutable 
// Function , Arrays , Dates , Regex , Objects 
// Stores Data in Heap 
// Its is slower than stack 
// But much usefull for complex variables
let obj1 = { name: "Vaibhav", age: 20 }
console.log(obj1); // { name: 'Vaibhav', age: 20 }

let obj2 = obj1;
console.log(obj2); // { name: 'Vaibhav', age: 20 }

obj1.name = "Thobbi"

console.log(obj2); // { name: 'Thobbi', age: 20 }




