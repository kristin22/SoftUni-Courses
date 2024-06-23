function safari(input) {
    let budget = Number(input[0]);
    let needL = Number(input[1]);
    let day = input[2];

    let total = needL * 2.10 + 100;

    if(day === "Saturday") {
        total *= 0.90;
    } else if(day === "Sunday") {
        total *= 0.80;
    }

    if(budget >= total) {
        console.log(`Safari time! Money left: ${(budget - total).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(total - budget).toFixed(2)} lv.`);
    }


}

safari(["1000",
        "10",
        "Sunday"]);

safari(["120",
        "30",
        "Saturday"]);

safari(["105.20",
        "15",
        "Sunday"]);


