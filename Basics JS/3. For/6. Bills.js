function bills(input) {
    let months = Number(input[0]);
    let currElectricity = 0;
    let electricity = 0;
    let water = months * 20;
    let internet = months * 15;
    let other = 0;
    let average = 0;

    for(let index = 1; index <= months; index++) {
        currElectricity = Number(input[index]);
        electricity += currElectricity;
        other += (currElectricity + 20 + 15) * 1.20;
    }

    average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${(electricity).toFixed(2)} lv`);
    console.log(`Water: ${(water).toFixed(2)} lv`);
    console.log(`Internet: ${(internet).toFixed(2)} lv`);
    console.log(`Other: ${(other).toFixed(2)} lv`);
    console.log(`Average: ${(average).toFixed(2)} lv`);
}

// bills([5,
//     68.63,
//     89.25,
//     132.53,
//     93.53,
//     63.22]);

bills([8,
        123.54,
        231.54,
        140.23,
        100,
        122.4,
        430,
        178.52,
        64.2]);