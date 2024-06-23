function mathOperations(num1, num2, operator) {
    let operations = {
        "+": (a, b) => a + b, 
        "-": (a, b) => a - b, 
        "*": (a, b) => a * b, 
        "/": (a, b) => a / b, 
        "%": (a, b) => a % b, 
        "**": (a, b) => a ** b, 
    };

    return operations[operator](num1, num2);
}

console.log(mathOperations(5, 6, '+'));
console.log(mathOperations(3, 5.5, '*'));