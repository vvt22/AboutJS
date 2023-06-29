// Methods in JavaScript and This Keyword
// Function in Object are Known as Methods
//Hence basically, the JavaScript method is an object property that has a function value.

// const obj = {
//     name: "Vaibhav",
//     age: 21,
//     isAlive: true,
//     call: function () {
//         return "Hello I am a Method"
//     }
// }

// console.log(obj);
// console.log(obj.call());


// const obj = {
//     name: "Vaibhav",
//     age: 21,
//     isAlive: true,
//     fun() {
//         return "Hello I am a Method"
//     }
// }

// console.log(obj);
// console.log(obj.fun());


const obj = {
    name: "Vaibhav",
    age: 21,
    isAlive: true,
    fun() {
        return `I am ${this.name} and my age is ${this.age} and i am alive is ${this.isAlive} `
    }
}

console.log(obj);
console.log(obj.fun());
