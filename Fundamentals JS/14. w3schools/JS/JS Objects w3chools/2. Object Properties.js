//*? =========== JS Objects w3schools ===========

//*? 2. Object Properties
/* Properties are unordered. They can be changed, added, and deleted but some are read only.  */

const person = {
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    eyeColor: "blue" 
};

//*? I. Accessing JS Properties

person.age;         // objectName.property 

person["age"];      // objectName["property"] 

const x = "age";
person[x];          // objectName[expression]   => The expression must evaluate to a property name.

console.log(person.firstname + " is " + person.age + " years old.");
console.log(person["firstname"] + " is " + person["age"] + " years old.");


//*? II. for...in loop statement =>  loops through the properties of an object

for (let x in person) {
    txt += person[x];
}


//*? II. Adding New Properties

person.nationality = "English";


//*? III. Deleting Properties => delete keyword
// The delete keyword deletes both the value of the property and the property itself.

delete person.age;
// or
delete person["eyeColor"];


//*? IV. Nested Objects  => Values in an object can be another object

const myObj1 = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    },
  };

// You can access nested objects using the dot notation or the bracket notation:

myObj1.cars.car2;
// or
myObj1.cars["car2"];
// or
myObj1["cars"]["car2"];

// or
let p1 = "cars";
let p2 = "car2";
myObj1[p1][p2];


//*? V. Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

// To access arrays inside arrays, use a for-in loop for each array:
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }


//*? VI. Property Attributes
/* All properties have a name. In addition they also have a value.
   The value is one of the property's attributes.
   Other attributes are: enumerable, configurable, and writable.

   These attributes define how the property can be accessed (is it readable?, is it writable?)

   In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).   */
   
 
//*? VII. Prototype Properties => JS objects inherit the properties of their prototype.
// The delete keyword does not delete inherited properties, 
// but if you delete a prototype property, it will affect all objects inherited from the prototype.
