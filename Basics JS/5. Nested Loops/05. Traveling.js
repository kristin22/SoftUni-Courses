function traveling(input) {
    let index = 0;
    let destination = input[index];
    let minBudget = 0;

    while (destination !== "End") {  // за дестинациите
    
        let savings = 0;
        minBudget = Number(input[index + 1]);
        index += 2;

        while (savings < minBudget) {  // за бюджета
            let currMoney = Number(input[index]);
            savings += currMoney;
            index++;
        }

        console.log(`Going to ${destination}!`);

        destination = input[index];
    }
}

traveling(["Greece",
        "1000",
        "200",
        "200",
        "300",
        "100",
        "150",
        "240",
        "Spain",
        "1200",
        "300",
        "500",
        "193",
        "423",
        "End"]);

traveling(["France",
        "2000",
        "300",
        "300",
        "200",
        "400",
        "190",
        "258",
        "360",
        "Portugal",
        "1450",
        "400",
        "400",
        "200",
        "300",
        "300",
        "Egypt",
        "1900",
        "1000",
        "280",
        "300",
        "500",
        "End"]);