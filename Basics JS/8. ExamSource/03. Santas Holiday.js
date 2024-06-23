function santa(input) {
    let daysCount = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];

    let nights = daysCount - 1;
    let total = 0;

    switch(roomType) {
        case 'room for one person': // no discount
            total = 18 * nights;
            break;
        case 'apartment':
            total = 25 * nights;
            if(daysCount < 10) {
                total *= 0.7;
            } else if(daysCount >= 10 && daysCount <= 15) {
                total *= 0.65;
            } else if(daysCount > 15) {
                total *= 0.5;
            }
            break;
        case 'president apartment':
            total = 35 * nights;
            if(daysCount < 10) {
                total *= 0.9;
            } else if(daysCount >= 10 && daysCount <= 15) {
                total *= 0.85;
            } else if(daysCount > 15) {
                total *= 0.8;
            }
            break;
    }

    if(rate === 'positive') {
        total *= 1.25;
    } else if(rate === 'negative') {
        total *= 0.9;
    }

    console.log(total.toFixed(2));
}

santa(["14",
"apartment",
"positive"]);

santa(["30",
"president apartment",
"negative"]);

santa(["12",
"room for one person",
"positive"]);

santa(["2",
"apartment",
"positive"]);