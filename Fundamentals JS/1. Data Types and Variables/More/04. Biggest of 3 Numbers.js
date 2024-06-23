function compare3Nums(a, b, c) {
    let maxNum = -123456789;
    if (a > maxNum) {
        maxNum = a;
    }
    if (b > maxNum) {
        maxNum = b;
    }
    if (c > maxNum) {
        maxNum = c;
    }

    console.log(maxNum);
}

compare3Nums(-2, 7, 3);