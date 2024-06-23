function integerAndFloat(a, b, c) {
    let sum = a + b + c;

    let numType = "";
    if (sum % 1 === 0) {
        numType = "Integer"
    } else {
        numType = "Float";
    }

    console.log(`${sum} - ${numType}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);