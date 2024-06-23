function trip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);
    let sum = 0;

    if (nights > 7) {
        nights *= 0.95;
    }
 
    sum += nights * pricePerNight + (percent/100) * budget;

    if (sum <= budget) {
        console.log(`Ivanovi will be left with ${(budget - sum).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(sum - budget).toFixed(2)} leva needed.`);    
    }
}

trip([800.50,
    8,
    100,
    2]);

trip([500,
    7,
    66,
    15]);