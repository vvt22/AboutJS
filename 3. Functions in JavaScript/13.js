// Anonymous Function

setTimeout(function () {
  console.log("Hello");
}, 3000);

//  This is an Anonymous Function
// A Function without Name is called Anonymous Function

-----------------------------------------------------------------------
// IIFE
// Immediately Invoked Function Expression
//
(function () {
  console.log("Hello");
})();
//
// //  This is an IIFE
// // A Function without Name is called Anonymous Function
// // IIFE is an Anonymous Function
// // IIFE is an Anonymous Function that is immediately invoked
// When do we use IIFE?
// When we want to execute a function immediately
// When we want to create a private scope
// When we want to create a private variable
// When we want to create a private function
// When we want to create a private method
// When we want to create a private property
// When we want to create a private class
// When we want to create a private object
// When we want to create a private instance
// When we want to create a private constructor

------------------------------------------------------------------------------------

function ShowMessage(firstName, lastName) {
  console.log("Hello " + arguments[0] + " " + arguments[1]);
}

ShowMessage("Steve", "Jobs");

ShowMessage("Bill", "Gates");

ShowMessage(100, 200);
