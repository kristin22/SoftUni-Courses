function biggestEl(arr) {
    let biggest = Math.max(...arr.shift());

    arr.forEach(line => {
        let currBiggest = Math.max(...line);
        if (currBiggest >= biggest) { biggest = currBiggest; }
    });

    return biggest;
}

console.log(biggestEl([[20, 50, 10], [8, 33, 145]]));
console.log(biggestEl([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));