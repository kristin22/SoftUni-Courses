function compare(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    if (firstNum >= secondNum) {
        console.log(firstNum);
    } else if(secondNum > firstNum) {
        console.log(secondNum);
    }
}

compare([ "5", "3" ]);
compare([ "3", "5" ]);
compare([ "10", "10" ]);
compare([ "-5", "5" ]);