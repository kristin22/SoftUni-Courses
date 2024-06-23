function numbersSum(n, m) {
    n = +n;
    m = +m;

    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum;
}

console.log(numbersSum("1", "5"));
console.log(numbersSum("-8", "20"));