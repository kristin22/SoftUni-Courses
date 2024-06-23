function bikeRace(input) {
    let juniorsCnt = Number(input[0]);
    let seniorsCnt = Number(input[1]);
    let traceType = input[2];

    let total = 0;
    let juniorsPrice = 0, seniorsPrice = 0;

    if (traceType === "trail") {
        juniorsPrice = 5.50;
        seniorsPrice = 7;
    } else if (traceType === "cross-country") {
        juniorsPrice = 8;
        seniorsPrice = 9.50;
        if ((juniorsCnt + seniorsCnt) >= 50) {
            juniorsPrice *= 0.75;
            seniorsPrice *= 0.75;
        }
    } else if (traceType === "downhill") {
        juniorsPrice = 12.25;
        seniorsPrice = 13.75;
    } else if (traceType === "road"){
        juniorsPrice = 20;
        seniorsPrice = 21.50;
    }

    total = (juniorsCnt * juniorsPrice + seniorsCnt * seniorsPrice) * 0.95;

    console.log(total.toFixed(2));
}

bikeRace([10, 20, "trail"]);
bikeRace([21, 26, "cross-country"]);
bikeRace([30, 25, "cross-country"]);
bikeRace([10, 10, "downhill"]);
bikeRace([3, 40, "road"]);