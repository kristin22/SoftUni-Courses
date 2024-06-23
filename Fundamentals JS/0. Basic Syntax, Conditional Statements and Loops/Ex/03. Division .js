function division(num) {
    let devidedBy = 0;
    if(num % 2 === 0) {
        devidedBy = 2;
    }
    if(num % 3 === 0) {
        devidedBy = 3;
    }
    if(num % 6 === 0) {
        devidedBy = 6;
    }
    if(num % 7 === 0) {
        devidedBy = 7;
    }
    if(num % 10 === 0) {
        devidedBy = 10;
    }

    let isDivisible = num % 2 === 0 || num % 3 === 0 ||  num % 6 === 0 || num % 7 === 0 || num % 10 === 0;
    if(!isDivisible) {
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${devidedBy}`);
    }

}

division(30);
division(15);
division(12);
division(1643);