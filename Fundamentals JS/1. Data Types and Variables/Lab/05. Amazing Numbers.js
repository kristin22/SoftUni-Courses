function amazingNumbers(num) {      // Not Done Yet: check if includes the digit 9
    // num = num.toString();        converts num from Number to String

    let strNum = String(num);
    let digitsSum = 0;

    for (let i = 0; i < strNum.length; i++) {
        digitsSum += Number(strNum[i]);
    }

    if (digitsSum.toString().includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);