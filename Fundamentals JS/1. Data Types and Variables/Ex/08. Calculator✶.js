function calc(a, operation, b) {
    let result = 0;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }

    console.log(result.toFixed(2));
}

calc(5, '+', 10);
calc(25.5, '-', 3);