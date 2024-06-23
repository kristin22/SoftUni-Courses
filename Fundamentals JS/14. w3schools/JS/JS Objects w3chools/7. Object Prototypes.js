//? =========== JS Objects w3schools ===========

//? 7. JS Object Prototypes

//? I. Prototype Inheritance
//* All JS objects inherit properties and methods from a prototype.

// In the previous chapter we learned how to use an object constructor:
// Example:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// We also learned that you can not add a new property to an existing object constructor:

//? II. Adding Properties and Methods to Objects

// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.

//? III. Using the prototype Property

// The JS prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
  Person.prototype.nationality = "English";


//* The JS prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

//* Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.



