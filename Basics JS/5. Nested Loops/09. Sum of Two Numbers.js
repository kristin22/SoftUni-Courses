function sum(input) {
    let starts = Number(input[0]);
    let ends = Number(input[1]);
    let sum = Number(input[2]);

    let flag = false;
    let counter = 0;

    for (let a = starts; a <= ends; a++) { 
         for (let b = starts; b <= ends; b++) {
            counter++;
            if ((a + b) === sum) {
                flag = true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${sum})`);
                break;
            } else if (a === ends && b === ends ) {
                console.log(`${counter} combinations - neither equals ${sum}`)
            }
         }

         if (flag) break; 
    }
}

sum(["1", "10", "5"]);
sum(["23", "24", "20"]);
sum(["88", "888", "1000"]);