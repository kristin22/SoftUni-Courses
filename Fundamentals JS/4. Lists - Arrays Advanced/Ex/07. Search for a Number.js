function numberSearch(numbers, input) {
    numbers = numbers.splice(0, input[0]);
    
    for(let i = 0; i < input[1]; i++) {
        numbers.shift();
    } 
    
    let counter = 0;
    for(let element of numbers) {
        if (element === input[2]) {
            counter++;
        }
    }

    console.log(`Number ${input[2]} occurs ${counter} times.`)
}

numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
numberSearch([7, 1, 5, 8, 2, 7], [3, 1, 5]);