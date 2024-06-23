function solve(numbers) {
    let n = numbers[0];
    numbers.shift();

    let start = numbers.slice(0, n);                // slice(start, end)
    let end = numbers.slice(numbers.length - n);    // slice(start)
    
    console.log(start.join(" "));
    console.log(end.join(" "));
}

solve([2, 
    7, 8, 9]);

solve([3,
    6, 7, 8, 9]);