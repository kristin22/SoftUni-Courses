function stadiumIncome(input) {
    let sectorsCount = Number(input[0]);
    let capacity = Number(input[1]);
    let ticketPrice = Number(input[2]);

    let perSector = (capacity * ticketPrice)  / sectorsCount;
    let total = perSector * sectorsCount;
    let charity = (total - (perSector * 0.75)) / 8;

    console.log(`Total income - ${total.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charity.toFixed(2)} BGN`);
}

stadiumIncome(["4", "5000", "5"]);
stadiumIncome(["8", "10000", "3.25"]);
