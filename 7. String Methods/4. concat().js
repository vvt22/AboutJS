let a1 = "Vaibhav";
let a2 = "Thobbi";

console.log(a1.concat(" ", a2)); // Vaibhav Thobbi
console.log("".concat({})); // [object Object]
console.log("".concat(null)); // null
console.log("".concat(true)); // true
console.log("".concat(4, 5)); // 45

let str1 = "Hello";
let str2 = "World";

// concatenating two strings
let newStr = str1.concat(", ", str2, "!");
console.log(newStr); // Hello, World!
