//? =========== JS Objects w3schools ===========

//? 10. Maps

//* A Map holds key-value pairs where the keys can be any datatype.
//* A Map remembers the original insertion order of the keys.
//* Map has a property that represents the size of the map.

//? I. Map Methods

new Map()	//* Creates a new Map object
set()	    //* Sets the value for a key in a Map
get()	    //* Gets the value for a key in a Map
clear()	    //* Removes all the elements from a Map
delete()	//* Removes a Map element specified by a key
has()	    //* Returns true if a key exists in a Map
forEach()	//* Invokes a callback for each key/value pair in a Map
entries()	//* Returns an iterator object with the [key, value] pairs in a Map
keys()	    //* Returns an iterator object with the keys in a Map
values()	//* Returns an iterator object of the values in a Map
//Property	Description
//* size	Returns the number of Map elements


//? II. How to Create a Map =>  You can create a JS Map by:
//* Passing an Array to new Map()
//* Create a Map and use Map.set()


//? III. new Map()  => You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);


//? IV. Map.set()   => set() method adds elements to a Map:

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

//* The set() method can also be used to change existing Map values:
fruits.set("apples", 500);


//? V. Map.get()  =>   get() method gets the value of a key in a Map:
fruits.get("apples");    // Returns 500


//? VI. Map.size   =>   size property returns the number of elements in a Map:
fruits.size;


//? VII. Map.delete()   =>   delete() method removes a Map element:
fruits.delete("apples");


//? VIII. Map.clear()   =>   clear() method removes all the elements from a Map:
fruits.clear();


//? IX. Map.has()   =>   has() method returns true if a key exists in a Map:
fruits.has("apples");

// try this:
fruits.delete("apples");
fruits.has("apples");


//? X. Maps are Objects   =>   typeof returns object:
// Returns object:
typeof fruits;

//* instanceof Map returns true:

// Returns true:
fruits instanceof Map;


//? XI. JavaScript Objects vs Maps   =>   Differences between JS Objects and Maps:
/*
* Object	                                Map
  Not directly iterable	                Directly iterable
  Do not have a size property	        Have a size property
  Keys must be Strings (or Symbols)	    Keys can be any datatype
  Keys are not well ordered	            Keys are ordered by insertion
  Have default keys	                    Do not have default keys
*/


//? XII. Map.forEach()   =>   forEach() method invokes a callback for each key/value pair in a Map:

// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})


//? XIII. Map.entries()   =>   entries() method returns an iterator object with the [key,values] in a Map:

// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
// text -> apples, bananas, oranges


//? XIV. Map.values()   =>   values() method returns an iterator object with the values in a Map:

// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}


//? XV. Objects as Keys
//* Being able to use objects as keys is an important Map feature.

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

//* Remember: The key is an object (apples), not a string ("apples"):
fruits.get("apples");  // Returns undefined



