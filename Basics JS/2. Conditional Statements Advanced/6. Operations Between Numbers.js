function operations(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let operation = input[2];

    let result = 0;
    switch (operation) {
        case '+': 
            result = firstNum + secondNum;
            if (result % 2 === 0) {
                console.log(`${firstNum} + ${secondNum} = ${result} - even`);
            } else {
                console.log(`${firstNum} + ${secondNum} = ${result} - odd`);
            }
            break;
        case '-':
            result = firstNum - secondNum;
            if (result % 2 === 0) {
                console.log(`${firstNum} - ${secondNum} = ${result} - even`);
            } else {
                console.log(`${firstNum} - ${secondNum} = ${result} - odd`);
            }
            break;
        case '*':
            result = firstNum * secondNum;
            if (result % 2 === 0) {
                console.log(`${firstNum} * ${secondNum} = ${result} - even`);
            } else {
                console.log(`${firstNum} * ${secondNum} = ${result} - odd`);
            }
            break;
        case '/':
            if (secondNum == 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                result = firstNum / secondNum;
                console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`)
            }
            break;
        case '%':
            if (secondNum == 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                result = firstNum % secondNum;
                console.log(`${firstNum} % ${secondNum} = ${result}`)
            }
            break;
    }
}

operations(["10", "12", "+"]);
operations(["10", "1", "-"]);
operations(["7", "3", "*"]);
operations(["123", "12", "/"]);
operations(["10", "3", "%"]);
operations(["112", "0", "/"]);
operations(["10", "0", "%"]);