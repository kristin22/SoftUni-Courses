function excursiion(input) {
    let seaCount = Number(input[0]);
    let mountainCount = Number(input[1]);

    let command = input[2];
    let index = 2;
    let profit = 0;

    while(command !== "Stop") {
        if(command === "sea") {
            if(seaCount === 0) {
                command = input[++index];
                continue;
            }
            seaCount--;
            profit += 680;
        } else if(command === "mountain") {
            if(mountainCount === 0) {
                command = input[++index];
                continue;
            }
            mountainCount--;
            profit += 499;
        }
        if(seaCount === 0 && mountainCount === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }

        command = input[++index];
    }

    console.log(`Profit: ${profit.toFixed(2)} leva.`)
}

excursiion(['2','2','sea','mountain','sea','sea','mountain']);