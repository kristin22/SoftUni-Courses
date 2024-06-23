function excursionCalc(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let total = 0;
    let priceFor1 = 0;
    switch(season) {
        case 'spring':
            if(peopleCount <= 5) {
                priceFor1 = 50;
            } else if(peopleCount > 5) {
                priceFor1 = 48;
            }
            break;
        case 'summer':
            if(peopleCount <= 5) {
                priceFor1 = 48.50;
            } else if(peopleCount > 5) {
                priceFor1 = 45;
            }
            break;
        case 'autumn':
            if(peopleCount <= 5) {
                priceFor1 = 60;
            } else if(peopleCount > 5) {
                priceFor1 = 49.50;
            }
            break;
        case 'winter':
            if(peopleCount <= 5) {
                priceFor1 = 86;
            } else if(peopleCount > 5) {
                priceFor1 = 85;
            }
            break;
    }

    total = peopleCount * priceFor1;
    if(season === 'summer') {
        total *= 0.85;
    } else if(season === 'winter') {
        total *= 1.08;
    }

    console.log(`${total.toFixed(2)} leva`);
}

excursionCalc(["5",
"spring"]);

excursionCalc(["10",
"summer"]);

excursionCalc(["15",
"autumn"]);

excursionCalc(["20",
"winter"]);