function pcRoom(input) {
    let month = input[0];
    let spendHours = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayOrNight = input[3];

    let pricePer1 = 0;
    switch (month) {
        case "march":
        case "april":
        case "may":
            switch (dayOrNight) {
                case "day": pricePer1 = 10.50;   break;
                case "night": pricePer1 = 8.40;   break; 
            }
            break;

        case "june":
        case "july":
        case "august":
            switch (dayOrNight) {
                case "day": pricePer1 = 12.60;   break;
                case "night": pricePer1 = 10.20;   break; 
            }
            break;
    }

    if (peopleCount >= 4) {
        pricePer1 *= 0.9;
    }
    if (spendHours >= 5) {
        pricePer1 *= 0.5;
    }

    let total = pricePer1 * spendHours * peopleCount;

    console.log(`Price per person for one hour: ${pricePer1.toFixed(2)}`);
    console.log(`Total cost of the visit: ${total.toFixed(2)}`);
}

pcRoom(["march",
"3",
"3",
"day"]);

pcRoom(["july",
"5",
"5",
"night"]);