function printAndSum(starts, ends) {
    let sum = 0;
    let text = "";
    for(let currNum = starts; currNum <= ends; currNum++) {
        text += `${currNum} `;
        sum += currNum;
    }

    console.log(text.trim());
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);