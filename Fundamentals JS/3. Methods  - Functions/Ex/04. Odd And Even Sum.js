function oddAndEven(sequence) {
    let line = String(sequence);

    let evenOddSum = sequence => {
        let n = line.length;
        
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < n; i++) {
            let currNum = Number(line[i]);
            
            if (currNum % 2 === 0) {
                evenSum += currNum;
            } else {
                oddSum += currNum;
            }
        }

        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }

    console.log(evenOddSum(sequence));
}

oddAndEven(1000435);
oddAndEven(3495892137259234);