//? ... Spread Syntax  ...

//? 0. The Spread (...) Operator
//* The ... operator expands an iterable (like an array) into more elements
//* This allows us to quickly copy all or parts of an existing array into another array:

// Example 1
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
// year is -> Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May

// Example 2:
// Assign the first and second items from numbers to variables and put the rest in an array:
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
// 1,2,3,4,5,6

//* The ... operator can be used to expand an iterable into more arguments for function calls:
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
// maxValue = 87


//* The spread operator is often used to extract only what's needed from an array:
const nums = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = nums;
// one 1
// two 2
// rest 3,4,5,6


//* We can use the spread operator with objects too:
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
  
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
/*
brand: "Ford"
color: "yellow"
model: "Mustang"
type: "car"
year: 2021
*/

//* Notice: the properties that did not match were combined, 
//* but the property that did match, color, was overwritten by the last object 
//* that was passed, updateMyVehicle. The resulting color is now yellow.


