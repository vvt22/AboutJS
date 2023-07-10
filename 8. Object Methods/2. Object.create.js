let a1 = {
  name: "Vaibhav",
  age: 20,
};

let a2 = Object.create(a1);
console.log(a2); // {}

// But it has access to all a1 keys

console.log(a2.name); // Vaibhav
console.log(a2.age); // 20

console.log(a1);

// It copies whole object into new variable but not a refernce one

// it shows empty when you console
// but it has access to all old objects
