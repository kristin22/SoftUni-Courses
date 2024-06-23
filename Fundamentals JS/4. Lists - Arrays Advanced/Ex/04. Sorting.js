function sorting(numbers) {
    numbers = numbers.sort((a, b) => a - b);

    let n = numbers.length;

    let first = numbers.slice(0, n/2);
    let second = numbers.slice(n/2, n);
    second = second.sort((a, b) => b - a);
    let output = [];
    for(let i = 0; i < n/2; i++) {
        output.push(second[i], first[i]);
    }

    console.log(output.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);