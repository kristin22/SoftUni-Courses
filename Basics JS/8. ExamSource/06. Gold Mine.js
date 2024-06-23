function goldMine(input) {
    let locationsCount = Number(input[0]);
    
    let index = 0;
    let expected = 0;
    let daysCount = 0;
    // let digAday = 0;

    for (let currLocation = 1; currLocation <= locationsCount; currLocation++) {
        expected = Number(input[++index]);
        daysCount = Number(input[++index]);

        let locationSum = 0;

        for (let currDay = 1; currDay <= daysCount; currDay++) {
            // digAday = Number(++index);
            locationSum += Number(input[++index]);;
        }

        let average = locationSum / daysCount;
        if (average >= expected) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else if (average < expected) {
            console.log(`You need ${(expected - average).toFixed(2)} gold.`);
        }

    }
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);

goldMine(["1",
"5",
"3",
"10",
"1",
"3"]);