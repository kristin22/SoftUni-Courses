function oddSum(n) {
    let num = 1;
    let sum = 0;
    for(let curr = 1; curr <= n; curr++) {
        console.log(num);
        sum += num;
        num += 2;
    }
    console.log(`Sum: ${sum}`);
}

oddSum(5);
oddSum(3);