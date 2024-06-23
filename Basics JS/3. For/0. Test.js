function printNumsReverceOrder(input) {
    let n = Number(input[0]);   
    let numbers = ""; // конкатенираме стринга в тази променлива

 for (let i = n; i >= 1; i--) { // > 0
    numbers += i;
    if (i != 1) {   // за да пропусне запетая при последното число
    numbers += (i + ", ");

    }
 }

    console.log(numbers);   // принтиераме крайния (конкатенирания) стринг
}

printNumsReverceOrder([8]);

/* По принцип конкатенацията е бавна операция! */