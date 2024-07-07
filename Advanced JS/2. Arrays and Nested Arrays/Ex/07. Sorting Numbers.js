function sortNums(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    while(nums.length > 0) {
        result.push(nums.shift(), nums.pop());
    }
    return result;
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));