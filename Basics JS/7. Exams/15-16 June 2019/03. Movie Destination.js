function destination(input) {
    let budget = Number(input[0]);
    let city = input[1];
    let season = input[2];
    let daysCnt = Number(input[3]);

    let total = 0;
    let price = 0;

    if(city === "Dubai") {
        if(season === "Summer") {
            price = 40000;
        } else if(season === "Winter") {
            price = 45000;
        }
    } else if(city === "Sofia") {
        if(season === "Summer") {
            price = 12500;
        } else if(season === "Winter") {
            price = 17000;
        }
    } else if(city === "London") {
        if(season === "Summer") {
            price = 20250;
        } else if(season === "Winter") {
            price = 24000;
        }
    }

    total = daysCnt * price;
    if(city === "Dubai") {
        total *= 0.70;
    } else if(city === "Sofia") {
        total *= 1.25;
    }

    if(total <= budget) {
        console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(total - budget).toFixed(2)} leva more!`);
    }
}

destination(["400000",
            "Sofia",
            "Winter",
            "20"]);

destination(["1000000",
            "Dubai",
            "Summer",
            "5"]);

destination(["200000",
            "London",
            "Summer",
            "7"]);