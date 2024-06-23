function distinctArray(numbers) {
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j  = i + 1; j < numbers.length; j++) {
            if(numbers[i] === numbers[j]) {
                numbers.splice(j, 1);
            }
        }
    }

    console.log(numbers.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);