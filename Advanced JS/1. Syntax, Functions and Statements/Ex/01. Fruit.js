function fruitFunc(fruit, weight, money) {
    weight /= 1000;
    money *= weight;

    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}

console.log(fruitFunc('orange', 2500, 1.80));
console.log(fruitFunc('apple', 1563, 2.35));