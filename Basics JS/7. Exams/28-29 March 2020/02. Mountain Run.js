function mountain(input) {
    let recordSeconds = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecPerM = Number(input[2]);

    let total = distanceInM * timeInSecPerM + Math.floor(distanceInM / 50) * 30;
    if(total < recordSeconds) {
        console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(total - recordSeconds).toFixed(2)} seconds slower.`);
    }

}

mountain(["10164",
"1400",
"25"]);

mountain(["5554.36",
"1340",
"3.23"]);

mountain(["1377",
"389",
"3"]);

mountain(["40", "2", "300"])