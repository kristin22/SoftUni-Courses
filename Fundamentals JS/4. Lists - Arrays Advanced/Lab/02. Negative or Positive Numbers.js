function negativeOrPositive(numbers) {
    numbers = numbers.map(x => Number(x));

    let newArr = [];

    for(let number of numbers) {
        if(number >= 0) {
            newArr.push(number);
        } else {
            newArr.unshift(number);
        }
    }

    console.log(newArr.join("\n"));

}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);