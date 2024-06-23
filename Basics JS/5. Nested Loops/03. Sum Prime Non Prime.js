function primeNonprimeSum(input) {
    let index = 0;
    let command = input[index];

    let primeSum = 0; 
    let nonPrimeSum = 0;

    while(command !== "stop") {
        let number = Number(command);

        if (number < 0) { 
            console.log(`Number is negative.`);
        } else if (number === 0) {
            nonPrimeSum += 0;
        } else {
            let counter = 0;
            for (let i = 1; i <= number; i++) { // просто: на 1 и на себе си
                if (number % i === 0) {
                    counter++;
                } 
            }
            
            if (counter === 2) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        }

        command = input[++index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

primeNonprimeSum(["3",
                "9",
                "0",
                "7",
                "19",
                "4",
                "stop"]);
primeNonprimeSum(["30",
                "83",
                "33",
                "-1",
                "20",
                "stop"]);

