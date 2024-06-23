function agregateElements(numArr) {
    let sum = 0;
    let sumInversed = 0;

    numArr.forEach(num => {
        sum += num;
        sumInversed += 1 / num;
    });

    return `${sum}\n${sumInversed}\n${numArr.join("")}`
}

console.log(agregateElements([1, 2, 3]));
console.log(agregateElements([2, 4, 8, 16]));