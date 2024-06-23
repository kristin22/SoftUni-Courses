function parking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let total = 0;

    for (let currDay = 1; currDay <= days; currDay++) {
        let tax = 0;
        let daySum = 0;

        for (let curHour = 1; curHour <= hours; curHour++) {
            if (currDay % 2 === 0 && curHour % 2 !== 0) {
                tax = 2.50;
            } else if (currDay % 2 !== 0 && curHour % 2 === 0) {
                tax = 1.25;
            } else {
                tax = 1;
            }
            daySum += tax;
        }

        console.log(`Day: ${currDay} - ${(daySum).toFixed(2)} leva`);
        total += daySum;
    }

    console.log(`Total: ${(total).toFixed(2)} leva`);
}

parking([2, 5]);