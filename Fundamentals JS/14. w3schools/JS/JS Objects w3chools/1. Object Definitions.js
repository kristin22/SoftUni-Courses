//*? =========== JS Objects w3schools ===========


//*? 1. Object Definitions

//*? I. Using an Object Literal => the easiest way to create a JS Object

/* Using an object literal, you both define and create an object in one statement.
   An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
   The following example creates a new JavaScript object with four properties: */

let person1 = {
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    eyeColor: "blue"
};

// It is a common practice to declare objects with the const keyword.
// This is an object literal

const person2 = {
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    eyeColor: "blue"
};


//*? II. Using the JS Keyword new => new Object()

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";

/* The examples in I. do exactly the same.
   But there is no need to use new Object().
   For readability, simplicity and execution speed, use the object literal method. */

//*? III. JS Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// If person3 is an object, the following statement will not create a copy of person:
const x = person3;  // Will not create a copy of person.

/* The object x is not a copy of person. It is person. Both x and person are the same object.
   Any changes to x will also change person, because x and person are the same object.  */
  
x.age = 10;      // Will change both x.age and person.age




