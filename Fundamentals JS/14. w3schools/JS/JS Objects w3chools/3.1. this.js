// https://www.w3schools.com/js/js_this.asp

//? =========== JS Objects w3schools ===========

//? 3.1. The JS this keyword

//? I. What is this?
//* In JS, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
//* The this keyword refers to different objects depending on how it is used:

/* In an object method, this refers to the object.
   Alone, this refers to the global object.
   In a function, this refers to the global object.
   In a function, in strict mode, this is undefined.
   In an event, this refers to the element that received the event.
   Methods like call(), apply(), and bind() can refer this to any object. 
   
   Note: this is not a variable. It is a keyword. You cannot change the value of this.  */


//? II. this in a Method => When used in an object method, this refers to the object.

const person1 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;  
  }
};
// Here this refers to the person object, because the fullName method is a method of the person object.


//? III. this Alone => When used alone, this refers to the global object. Because this is running in the global scope.

// In a browser window the global object is [object Window]:
let x = this;

// In strict mode, when used alone, this also refers to the global object:
"use strict";
let y = this;


//? IV. this in a Function (Default) 
//  JS strict mode doesn't allow default binding. So, when used in a function, in strict mode, this is undefined.
"use strict";
function myFunction() {
  return this;
}


//? V. this in Event Handlers => In HTML event handlers, this refers to the HTML element that received the event:
{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}


//? VI. Object Method Binding => In these examples, this is the person object:
const person2 = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};

const person3 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// i.e. this.firstName is the firstName property of this (the person object).


//? VII. Explicit Function Binding
// The call() and apply() methods are predefined JS methods.
// They can both be used to call an object method with another object as argument.

// The example below calls person4.fullName with person5 as an argument, this refers to person5, even if fullName is a method of person4:
const person4 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person5 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person4.fullName.call(person5);


//? VIII. Function Borrowing => With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());  // Hege Nilsen


//? IV. this Precedence =>  To determine which object this refers to; use the following precedence of order.
/*
Is this in a function being called using bind()?
Is this in a function being called using apply()?
Is this in a function being called using call()?
Is this in an object function (method)?
Is this in a function in the global scope.
*/

