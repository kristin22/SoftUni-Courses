function tickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = input[2];

    if (people  >= 1 && people <= 4) {
        budget -= 0.75 * budget;
    } else if (people >= 5 && people <= 9) {
        budget -= 0.60 * budget;
    } else if (people >= 10 && people <= 24) {
        budget -= 0.50 * budget;
    } else if (people >= 25 && people <= 49) {
        budget -= 0.40 * budget;
    } else if (people >= 50) {
        budget -= 0.25 * budget;
    }

    let ticketMoney = 0;
    if(category == "VIP") {
        ticketMoney = people * 499.99;
    } else if (category == "Normal") {
        ticketMoney =  people * 249.99;
    }

    if (budget >= ticketMoney) {
        console.log(`Yes! You have ${(budget - ticketMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(ticketMoney - budget).toFixed(2)} leva.`);
    }

}

tickets([1000, "Normal", 1]);
tickets([30000, "VIP", 49]);