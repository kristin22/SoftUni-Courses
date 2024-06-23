function devidedTo9(input) {
    let starts = Number(input[0]);
    let ends = Number(input[1]);

    let sum = 0;   
    let arr = [];
    for (let number = starts; number <= ends; number++) {
        if (number % 9 === 0) {
            sum += number;
            arr.push(number);
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

devidedTo9(["100", "200"]);