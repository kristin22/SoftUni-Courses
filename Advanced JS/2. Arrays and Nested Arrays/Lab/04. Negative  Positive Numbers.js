function negPosNums(arr) {
    let result = [];
    arr.forEach(el => {
        (el < 0) ? result.unshift(el) : result.push(el);
    });

    return result;
}

console.log(negPosNums([7, -2, 8, 9]));
console.log(negPosNums([3, -2, 0, -1]));