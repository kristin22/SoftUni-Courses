//? =========== JS Objects w3schools ===========

//? 5. JS Object Accessors

//? I.JavaScript Accessors (Getters and Setters)
/*
ECMAScript 5 (ES5 2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties).
*/


//? II. JavaScript Getter (The get Keyword)
// Using a lang property to get the value of the language property:
// Create an object:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person1.lang;  // en


//? III. JavaScript Setter (The set Keyword)
// Using a lang property to set the value of the language property.
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person2.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person2.language;


//? IV. JavaScript Function or Getter?
/*
//* Example 1
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//* Display data from the object using a method:
document.getElementById("demo").innerHTML = person.fullName();
*/


/*
//* Example 2
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

//* Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
*/

//* The second example provides a simpler syntax.


//? V. Data Quality => JS can secure better data quality when using getters and setters.
// Using the lang property, in this example, returns the value of the language property in upper case:
/*
//* Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

//* Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
*/

// Using the lang property, in this example, stores an upper case value in the language property:
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

//* Set an object property using a setter:
person.lang = "en";

//* Display data from the object:
document.getElementById("demo").innerHTML = person.language;
*/

//? VI. Why Using Getters and Setters?
/*
?   It gives simpler syntax
?   It allows equal syntax for properties and methods
?   It can secure better data quality
?   It is useful for doing things behind-the-scenes
*/


//? VII. Object.defineProperty()    =>  The Object.defineProperty() method can also be used to add Getters and Setters:

// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;




