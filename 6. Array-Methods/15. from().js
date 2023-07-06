// Array From ()
// Array.from() Method returns a new array from any array likr iterable object

let names = "Vaibhav";

console.log(Array.from(names)); // [ 'S', 'u', 'h', 'a', 'i', 'l' ]

let num = "12345";
console.log(Array.from(num, (ele) => ele * ele));
console.log(num);
