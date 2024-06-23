//? =========== JS Objects w3schools ===========

//? 6. JS Object Constructors

// Example of an object constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//* It is considered good practice to name constructor functions with an upper-case first letter.


//? I. Object Types (Blueprints) (Classes)

/*
The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword:

*/

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//? II. What is this?

/*
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

Note:   this is not a variable. It is a keyword. You cannot change the value of this.

*/


//? III. Adding a Property to an Object

// The property will be added to myFather. Not to myMother. (Not to any other person objects).
myFather.nationality = "English";


//? IV. Adding a Method to an Object

// The method will be added to myFather. Not to myMother. (Not to any other person objects).
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};


//? V. Adding a Property to a Constructor

//* You cannot add a new property to an object constructor the same way you add a new property to an existing object:
Person.nationality = "English";
// The nationality of my father is undefined

//* To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

//* This way object properties can have default values.


//? VI. Adding a Method to a Constructor    =>   Your constructor function can also define methods:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {
      return this.firstName + " " + this.lastName;
    };
}

/*
You cannot add a new method to an object constructor the same way you add a new method to an existing object.
Adding methods to an object constructor must be done inside the constructor function:
*/

function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
}

// The changeName() function assigns the value of name to the person's lastName property.

// Change last name
myMother.changeName("Doe");

// Display last name
document.getElementById("demo").innerHTML =
"My mother's last name is " + myMother.lastName;
// My mother's last name is Doe

//? VII. Built-in JavaScript Constructors

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

//* The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

//? VIII. Did You Know?
/*
As you can see above, JS has object versions of the primitive data types String, Number, and Boolean. 
But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().
Use number literals 50 instead of new Number().
Use boolean literals true / false instead of new Boolean().
Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().

*/

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function



//? IX. String Objects  |   Number Objects  |   Boolean Objects

//* String Objects
/*
Normally, strings are created as primitives: firstName = "John";

But strings can also be created as objects using the new keyword:
firstName = new String("John");

Learn why strings should not be created as object in the chapter JS Strings.

*/

//* Number Objects

/*
Normally, numbers are created as primitives: x = 30

But numbers can also be created as objects using the new keyword:
x = new Number(30)

Learn why numbers should not be created as object in the chapter JS Numbers.

*/

//* Boolean Objects

/*
Normally, booleans are created as primitives: x = false

But booleans can also be created as objects using the new keyword:
x = new Boolean(false)

Learn why booleans should not be created as object in the chapter JS Booleans.
*/


