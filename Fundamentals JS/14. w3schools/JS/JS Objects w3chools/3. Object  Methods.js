//? =========== JS Objects w3schools ===========

//? 3. Object Methods

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {  
      return this.firstName + " " + this.lastName;
    }
};

// fullName is a method and a property of the person object.


//? I. What is this keyword?
/* ▶ In JS, the this keyword refers to an object.
   ▶ Which object depends on how this is being invoked (used or called).
   ▶ The this keyword refers to different objects depending on how it is used:

   ● In an object method, this refers to the object.
   ● Alone, this refers to the global object.
   ● In a function, this refers to the global object.
   ● In a function, in strict mode, this is undefined.
   ● In an event, this refers to the element that received the event.
   ● Methods like call(), apply(), and bind() can refer this to any object.
   
   Note:
   this is not a variable. It is a keyword. You cannot change the value of this. */


//? II. JS Methods  =>  methods are actions that can be performed on objects.
//* A JS method is a property containing a function definition.
//* Methods are functions stored as object properties.


//? III. Accessing Object Methods =>  objectName.methodName();

//* Accessing the fullName() method of a person object:
name = person.fullName();

//* If you access the fullName property, without (), it will return the function definition:
name = person.fullName;


//? IV. Adding a Method to an Object

person.name = function () {
  return this.firstName + " " + this.lastName;
};


//? V. Using Built-In Methods
// Using toUpperCase() method of String Object to convert text to uppercase:
let message = "Hello world!";
let x = message.toUpperCase();
// The value of x:  HELLO WORLD!





