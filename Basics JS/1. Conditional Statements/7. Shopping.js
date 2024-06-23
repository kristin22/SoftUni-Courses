function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let proccessors = Number(input[2]);
    let rams = Number(input[3]);

    let videocardsSum = videocards * 250.00;
    let proccessorsSum = proccessors * (0.35 * videocardsSum);
    let ramsSum = rams * (0.10 * videocardsSum);

    let bill = videocardsSum + proccessorsSum + ramsSum;
    
    if (videocards > proccessors) {
        bill *= 0.85;
    }

    if (bill <= budget) {
        console.log(`You have ${(budget - bill).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(bill - budget).toFixed(2)} leva more!`);
    }

}

shopping(["900",
    "2",
    "1",
    "3"]);
shopping(["920.45",
    "3",
    "1",
    "1"]);