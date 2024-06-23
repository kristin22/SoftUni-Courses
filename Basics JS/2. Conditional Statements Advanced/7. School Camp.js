function camp(input) {
    let season = input[0];
    let groupType = input[1];
    let cnt = Number(input[2]);
    let nights = Number(input[3]);
    let sport = "";
    let pricePerNight = 0;
    let total = 0;

    switch (groupType) {
        case "girls":
            switch (season) {
                case "Winter":
                    sport = "Gymnastics";
                    pricePerNight = 9.60;
                    break;
                case "Spring":
                    sport = "Athletics";
                    pricePerNight = 7.20;
                    break;
                case "Summer":
                    sport = "Volleyball";
                    pricePerNight = 15;
                    break;
            }
            break;
        case "boys":
            switch (season) {
                case "Winter":
                    sport = "Judo";
                    pricePerNight = 9.60;
                    break;
                case "Spring":
                    sport = "Tennis";
                    pricePerNight = 7.20;
                    break;
                case "Summer":
                    sport = "Football";
                    pricePerNight = 15;
                    break;
            }
            break;
        case "mixed":
            switch (season) {
                case "Winter":
                    sport = "Ski";
                    pricePerNight = 10;
                    break;
                case "Spring":
                    sport = "Cycling";
                    pricePerNight = 9.50;
                    break;
                case "Summer":
                    sport = "Swimming";
                    pricePerNight = 20;
                    break;
            }
            break;
    }

    total = nights * pricePerNight * cnt;

    if (cnt >= 50) {
        total *= 0.50;
    } else if (cnt >= 20 && cnt < 50) {
        total *= 0.85;
    } else if (cnt >= 10 && cnt < 20) {
        total *= 0.95;
    }

    console.log(`${sport} ${total.toFixed(2)} lv.`);
}

camp(["Spring",
    "girls",
    20,
    7]);
