//? =========== JS Objects w3schools ===========

//? 4. JS Display Objects

//? I. How to Display JavaScript Objects?   =>  Displaying a JS object will output [object Object].
// Example:
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  document.getElementById("demo").innerHTML = person;

/*
Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/


//? II. Displaying Object Properties
// The properties of an  object can be displayed as a string:

document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

//? III.Displaying the Object in a Loop
// The properties of an object can be collected in a loop:

let txt = "";
for (let x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;

// You must use person[x] in the loop.
// person.x will not work (Because x is a variable).


//? IV. Using Object.values()
//* Any JS object can be converted to an array using Object.values():

const myArray = Object.values(person);
// myArray is now a JavaScript array, ready to be displayed:
const myArray2 = Object.values(person);
document.getElementById("demo").innerHTML = myArray2;

//* Object.values() is supported in all major browsers since 2016.


//? V. Using JSON.stringify()
//* Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
let myStr1 = JSON.stringify(person);
// myStr is now a string, ready to be displayed:
document.getElementById("demo").innerHTML = myStr1;


//? VI. Stringify Dates => JSON.stringify() converts dates into strings:
const psn = {
  name: "John",
  today: new Date()
};

let myStr = JSON.stringify(psn);
document.getElementById("demo").innerHTML = myStr;
// {"name":"John","today":"2024-01-05T13:58:15.175Z"}


//? VII. Stringify Functions  =>  JSON.stringify() will not stringify functions:
const psn2 = {
  name: "John",
  age: function () {return 30;}
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

//* This can be "fixed" if you convert the functions into strings before stringifying.
const psn3 = {
  name: "John",
  age: function () {return 30;}
};
psn3.age = psn3.age.toString();

let myString3 = JSON.stringify(psn3);
document.getElementById("demo").innerHTML = myString3;
//The result will be a string following the JSON notation:
// ["John","Peter","Sally","Jane"]

//? VIII. Stringify Arrays => you can also stringify JavaScript arrays:






