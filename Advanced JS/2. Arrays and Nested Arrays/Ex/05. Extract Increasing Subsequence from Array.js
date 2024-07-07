function exactIncrease(arr) {
    let currBiggest = arr.shift();
    let result = [currBiggest];

    arr.forEach(num => (num >= currBiggest) ? (currBiggest = num, result.push(currBiggest)) : null);

    return result;
}   

console.log(exactIncrease([1, 3, 8, 4, 10,  12, 3, 2, 24]));
console.log(exactIncrease([1, 2, 3, 4]));
console.log(exactIncrease([20, 3, 2, 15, 6, 1]));