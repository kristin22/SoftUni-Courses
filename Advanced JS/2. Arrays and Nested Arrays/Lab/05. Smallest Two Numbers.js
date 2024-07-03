function smallestTwoNums(arr) {
    arr.sort((a, b) => a - b);
    let rersult = arr.slice(0, 2).join(" ");
    return rersult;
}

console.log(smallestTwoNums([30, 15, 50, 5]));
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));