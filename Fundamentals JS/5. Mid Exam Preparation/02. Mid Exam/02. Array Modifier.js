function arrModifier(arr) {
    let str = arr[0];

    let numbers = str.split(" ");
    numbers.map(Number);

    
    for (let i = 1; i < arr.length; i++) {
        str = arr[i];
        let currArr = str.split(" ");
        let command = currArr[0];

        if (command === "end") {
            //output the array ", " separated
        } else if (command === "swap") {
            let a = (currArr[1]);
            let numA = numbers[a];

            let b = Number(currArr[2]);
            let numB = numbers[b];
            
            numbers.splice(a, 1, numB);
            numbers.splice(b, 1, numA);
            
        } else if (command === "multiply") {
            let a = numbers[Number(currArr[1])] * numbers[Number(currArr[2])];
            numbers.splice(Number(currArr[1]), 1, a);
            
        } else if (command === "decrease") {
            numbers = numbers.map(x => x - 1);
        }
        
    }

    console.log(numbers.join(", "));

}

arrModifier( ['23 -2 321 87 42 90 -123',
            'swap 1 3',
            'swap 3 6',
            'swap 1 0',
            'multiply 1 2',
            'multiply 2 1',
            'decrease',
            'end']);

arrModifier(['1 2 3 4',
            'swap 0 1',
            'swap 1 2',
            'swap 2 3',
            'multiply 1 2',
            'decrease',
            'end']);