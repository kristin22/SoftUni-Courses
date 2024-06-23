function oldNumProcess(numbers) {
    let newNums = [];
    for(let i = 1; i < numbers.length; i+= 2) {
        newNums.unshift(numbers[i] * 2);
    }
    console.log(newNums.join(" "));
}

oldNumProcess([10, 15, 20, 25]);
oldNumProcess([3, 0, 10, 4, 7, 3]);