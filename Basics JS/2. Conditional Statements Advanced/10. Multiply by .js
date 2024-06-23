function multiplyByTwo(input) {
    let index = 0;
    let num = input[index];

    while (num >= 0) {
        console.log(`Result: ${(num * 2).toFixed(2)}`);

        index++;
        num = input[index];
    }
    if (num < 0) {
        console.log(`Negative number!`);
    }
}

multiplyByTwo([12,
            43.2144,
            12.3,
            543.23,
            -20]);