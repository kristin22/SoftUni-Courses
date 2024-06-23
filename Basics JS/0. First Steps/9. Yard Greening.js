function calculate(input) {
let finalPrice = 7.61 * input[0];
let discount = 0.18 * finalPrice;
finalPrice -= discount;

// console.log("The final price is: " + finalPrice + " lv.");
// console.log("The discount is: " + discount + " lv.");

console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);

}

calculate(["550"]);
calculate(["150"]);